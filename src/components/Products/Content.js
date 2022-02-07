export default function Content({ title, newPrice, oldPrice }) {
  return (
    <div className="content">
      <h3>{title}</h3>
      <div className="price">
        {newPrice}€ <span>{oldPrice}€</span>
      </div>
    </div>
  );
}
