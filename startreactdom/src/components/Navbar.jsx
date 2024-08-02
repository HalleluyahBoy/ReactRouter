import { Link, NavLink } from "react-router-dom";
import logo from "../img/react.png";
import pagelink from "./uno";

// Link and Nav are different
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul className="navigasWrapper">
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
    </nav>
  );
};

export default Navbar;
