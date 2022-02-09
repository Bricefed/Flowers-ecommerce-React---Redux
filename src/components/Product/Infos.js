import AddToCart from "./AddToCart";

export default function Infos({ title, newPrice, oldPrice, desc }) {
  return (
    <div className="infos-content">
      <h2>{title}</h2>
      <div className="price">
        {newPrice} € <span>{oldPrice} €</span>
      </div>
      <p>{desc}</p>
      <AddToCart />
    </div>
  );
}
