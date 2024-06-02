import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextAPI } from "../contexts";
import { actions, CLEAR_NUMBER, CACULATES } from "../constants/calculate";

interface HistoriesContext {
  histories: string[];
  setHistories: (histories: string[]) => void;
}

const CalculatePage = () => {
  const [result, setResult] = useState("");
  const [keepValue, setKeepValue] = useState("");
  const [oldValue, setOldValue] = useState("");
  const { histories, setHistories }: HistoriesContext = useContext(ContextAPI);

  useEffect(() => {
    window.addEventListener("click", (e: any) => {
      if (!e.target.closest(".calculate")) {
        setResult(oldValue);
      }
    });
  }, [oldValue]);

  const acceptNumber = (key: string) => /^[0-9]+$/.test(key);

  const handleResult = (str: string) => new Function("return " + str)();

  const renderColorToButtonAction = (key: string) => {
    if (CACULATES.includes(key)) return "#696363";

    if (acceptNumber(key) || key === ",") return "";

    return "#efa246";
  };

  const handleActionByButton = (key: string) => {
    if (CLEAR_NUMBER.includes(key)) {
      setResult("");
      setKeepValue("");
      return;
    }

    if (acceptNumber(key)) {
      if (!acceptNumber(keepValue.slice(-1))) {
        setResult(key);
      } else {
        setResult(result + key);
      }
      setKeepValue(keepValue + key);
      return;
    }

    if (key === "=") {
      const newResult = handleResult(keepValue);
      setResult(newResult);
      setHistories([...histories, `${keepValue} = ${newResult}`]);
      setKeepValue("");
      return;
    }

    if (!acceptNumber(keepValue.slice(-1))) return;
    setKeepValue(keepValue + key);
  };

  const handleKeyDown = ({ key }: any) => {
    const selectText = window.getSelection()?.toString();
    if (selectText && acceptNumber(key)) {
      setOldValue(result);
      setResult(key);
    }
  };

  return (
    <div>
      <Link to="/">Back to home</Link>
      <br />
      <Link to="/histories">Go to histories</Link>
      <div className="calculate" onKeyDown={handleKeyDown}>
        <div className="calculate__actions">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="calculate__result">
          <input readOnly value={result || 0} />
        </div>
        <div className="calculate__keyboard">
          <div className="calculate__keyboard__number">
            {actions(!!+result).map((row: string[], index: number) => (
              <div key={index} className="calculate__keyboard__number__row">
                {row.map((key: string) => (
                  <button
                    key={key}
                    style={{ backgroundColor: renderColorToButtonAction(key) }}
                    onClick={() => handleActionByButton(key)}
                  >
                    {key}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatePage;
