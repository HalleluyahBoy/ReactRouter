import { Link, NavLink } from "react-router-dom";

// Link and Nav are different
const Navbar = () => {
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

export default Navbar;
