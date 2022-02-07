import ImageBox from "./ImageBox";
import Content from "./Content";

export default function Card({ discount, img, title, newPrice, oldPrice }) {
  return (
    <div className="card">
      <span className="discount">{discount}</span>
      <ImageBox img={img} title={title} />
      <Content title={title} newPrice={newPrice} oldPrice={oldPrice} />
    </div>
  );
}
