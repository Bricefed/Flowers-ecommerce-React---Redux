import { NavLink } from "react-router-dom";

export default function Icons() {
  return (
    <div className="icons">
      <NavLink to="#!" className="fa fa-heart"></NavLink>
      <NavLink to="#!" className="fa fa-shopping-cart"></NavLink>
      <NavLink to="#!" className="fa fa-user"></NavLink>
    </div>
  );
}
