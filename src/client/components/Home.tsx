import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/detail">Detail</Link>
      <h1>Hello world!!</h1>
    </div>
  );
};

export default HomePage;
