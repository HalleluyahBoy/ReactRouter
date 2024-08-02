import React from "react";
import error from "../img/404.jpg";

const NotFound = () => {
  return (
    <div className="errorWrapper">
      <h1>page not found</h1>
      <img src={error} alt="error" />
    </div>
  );
};

export default NotFound;
