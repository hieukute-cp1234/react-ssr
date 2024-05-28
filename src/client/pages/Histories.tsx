import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextAPI } from "../contexts";

const HistoryPage = () => {
  const { histories }: any = useContext(ContextAPI);
  return (
    <div>
      <Link to="/calculate">Back to calculate</Link>
      <ul>
        {histories.map((history: string, index: number) => (
          <li key={index}>{history}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
