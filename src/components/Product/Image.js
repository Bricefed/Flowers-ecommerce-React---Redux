export default function Image({ img, title, discount }) {
  return (
    <div className="image">
      <img src={img} alt={title} />
      <span className="discount">{discount}</span>
    </div>
  );
}
