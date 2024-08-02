import React from "react";

const Personnel = () => {
  fetch("https://reqres.in/api/users").then((res) => res.json());
  return <div>Personnel</div>;
};

export default Personnel;
