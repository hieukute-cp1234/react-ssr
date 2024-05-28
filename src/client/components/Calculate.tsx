import React from "react";
import { Link } from "react-router-dom";

const CalculatePage = () => {
  return (
    <div>
      <Link to="/">Back to home</Link>
      <div className="calculate">
        <div className="calculate__actions">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="calculate__result">0</div>
        <div className="calculate__keyboard">
          <div className="calculate__keyboard__number">
            <div className="calculate__keyboard__number__row">
              <button className="calculate__keyboard--othor">AC</button>
              <button className="calculate__keyboard--othor">+/-</button>
              <button className="calculate__keyboard--othor">%</button>
              <button className="calculate__keyboard--calculation">/</button>
            </div>
            <div className="calculate__keyboard__number__row">
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button className="calculate__keyboard--calculation">x</button>
            </div>
            <div className="calculate__keyboard__number__row">
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button className="calculate__keyboard--calculation">-</button>
            </div>
            <div className="calculate__keyboard__number__row">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button className="calculate__keyboard--calculation">+</button>
            </div>
            <div className="calculate__keyboard__number__row">
              <button>0</button>
              <button>,</button>
              <button className="calculate__keyboard--calculation">=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatePage;
