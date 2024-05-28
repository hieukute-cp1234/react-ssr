import React from "react";
import { Link } from "react-router-dom";

const DetailPage = () => {
  return (
    <div>
      <p>Description: ReactJS ssr</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default DetailPage;
