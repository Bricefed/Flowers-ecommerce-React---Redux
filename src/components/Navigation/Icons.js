import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Icons() {
  const shoppingCart = useSelector((state) => state);
  let totalItems = 0;

  for (const item of shoppingCart.cart) {
    totalItems += item.qty;
  }

  return (
    <div className="icons">
      <NavLink to="#!" className="fa fa-heart"></NavLink>
      <NavLink to="/cart" className="fa fa-shopping-cart">
        <span>{totalItems}</span>
      </NavLink>
      <NavLink to="#!" className="fa fa-user"></NavLink>
    </div>
  );
}
