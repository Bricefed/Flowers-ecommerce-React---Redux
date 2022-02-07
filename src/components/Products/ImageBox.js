export default function ImageBox({ img, title }) {
  return (
    <div className="image-box">
      <img src={img} alt={title} />
      <div className="icons">
        <a href="#!" className="fa fa-heart"></a>
        <a href="#!" className="cart-btn">
          Ajouter au panier
        </a>
        <a href="#!" className="fa fa-eye"></a>
      </div>
    </div>
  );
}
