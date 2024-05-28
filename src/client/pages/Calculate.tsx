import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContextAPI } from "../contexts";

const CalculatePage = () => {
  const [result, setResult] = useState("");
  const [keepKey, setKeepKey] = useState("");
  const [aldValue, setOldValue] = useState("");
  const { histories, setHistories }: any = useContext(ContextAPI);

  useEffect(() => {
    window.addEventListener("click", (e: any) => {
      if (!e.target.closest(".calculate")) {
        setResult(aldValue);
      }
    });
  }, [aldValue]);

  const textAC = +result ? "C" : "AC";
  const acceptNumber = (key: string) => /^[0-9]+$/.test(key);

  const handleClearResult = () => {
    setResult("");
    setKeepKey("");
  };

  const handleResult = (str: string) => new Function("return " + str)();

  const handlePressNumber = (key: string) => {
    if (!acceptNumber(key)) return;
    if (!acceptNumber(keepKey.slice(-1))) {
      setResult(key);
    } else {
      setResult(result + key);
    }
    setKeepKey(keepKey + key);
  };

  const handlePressCalculation = (key: string) => {
    if (acceptNumber(key)) return;

    if (key === "=") {
      const newResult = handleResult(keepKey);
      setResult(newResult);
      setHistories([...histories, `${keepKey} = ${newResult}`]);
      setKeepKey("");
      return;
    }

    if (!acceptNumber(keepKey.slice(-1))) return;
    setKeepKey(keepKey + key);
  };

  const handleKeyDown = ({ key }: any) => {
    const selectText = window.getSelection()?.toString();
    if (selectText && acceptNumber(key)) {
      setOldValue(result);
      console.log(result);
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
            <div className="calculate__keyboard__number__row">
              <button
                className="calculate__keyboard--othor"
                onClick={handleClearResult}
              >
                {textAC}
              </button>
              <button
                className="calculate__keyboard--othor"
                onClick={() => handlePressCalculation("+/-")}
              >
                +/-
              </button>
              <button
                className="calculate__keyboard--othor"
                onClick={() => handlePressCalculation("%")}
              >
                %
              </button>
              <button
                className="calculate__keyboard--calculation"
                onClick={() => handlePressCalculation("/")}
              >
                /
              </button>
            </div>
            <div className="calculate__keyboard__number__row">
              <button onClick={() => handlePressNumber("7")}>7</button>
              <button onClick={() => handlePressNumber("8")}>8</button>
              <button onClick={() => handlePressNumber("9")}>9</button>
              <button
                className="calculate__keyboard--calculation"
                onClick={() => handlePressCalculation("*")}
              >
                x
              </button>
            </div>
            <div className="calculate__keyboard__number__row">
              <button onClick={() => handlePressNumber("4")}>4</button>
              <button onClick={() => handlePressNumber("5")}>5</button>
              <button onClick={() => handlePressNumber("6")}>6</button>
              <button
                className="calculate__keyboard--calculation"
                onClick={() => handlePressCalculation("-")}
              >
                -
              </button>
            </div>
            <div className="calculate__keyboard__number__row">
              <button onClick={() => handlePressNumber("1")}>1</button>
              <button onClick={() => handlePressNumber("2")}>2</button>
              <button onClick={() => handlePressNumber("3")}>3</button>
              <button
                className="calculate__keyboard--calculation"
                onClick={() => handlePressCalculation("+")}
              >
                +
              </button>
            </div>
            <div className="calculate__keyboard__number__row">
              <button onClick={() => handlePressNumber("0")}>0</button>
              <button onClick={() => handlePressCalculation(",")}>,</button>
              <button
                className="calculate__keyboard--calculation"
                onClick={() => handlePressCalculation("=")}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatePage;
