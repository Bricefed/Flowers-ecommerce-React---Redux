export default function BtnPayement({ id, img, title, newPrice, children }) {
  return (
    <li key={id}>
      <div className="col">
        <div className="image">
          <img src={process.env.PUBLIC_URL + img} alt={title} />
        </div>
        <div className="infos">
          <h4>{title}</h4>
          <p className="price">{newPrice} €</p>
        </div>
      </div>
      <div className="input">
        <label htmlFor="qtyInput">Quantité</label>
        {children}
      </div>
    </li>
  );
}
