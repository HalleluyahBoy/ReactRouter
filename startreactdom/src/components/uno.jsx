import { NavLink } from "react-router-dom";
import React from "react";
const pagelink = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/Personnel">Personnel</NavLink>
      </li>
      <li>
        <NavLink to="/PersonnelDetail">PersonnelDetail</NavLink>
      </li>
    </ul>
  );
};

export default pagelink;
