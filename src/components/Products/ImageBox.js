import { NavLink } from "react-router-dom";

export default function ImageBox({ slug, img, title }) {
  return (
    <div className="image-box">
      <img src={img} alt={title} />
      <div className="icons">
        <a href="#!" className="fa fa-heart"></a>
        <NavLink to={`/product/${slug}`} className="cart-btn">
          Voir le produit
        </NavLink>
      </div>
    </div>
  );
}
