export default function Infos({ title, newPrice, oldPrice, desc }) {
  return (
    <div className="infos-content">
      <h2>{title}</h2>
      <div className="price">
        {newPrice} € <span>{oldPrice} €</span>
      </div>
      <p>{desc}</p>
      <button className="btn">Ajouter au panier</button>
    </div>
  );
}
