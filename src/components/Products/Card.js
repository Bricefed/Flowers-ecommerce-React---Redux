import ImageBox from "./ImageBox";
import Content from "./Content";

export default function Card({
  slug,
  discount,
  img,
  title,
  newPrice,
  oldPrice,
}) {
  return (
    <div className="card">
      <span className="discount">{discount}</span>
      <ImageBox slug={slug} img={img} title={title} />
      <Content title={title} newPrice={newPrice} oldPrice={oldPrice} />
    </div>
  );
}
