export default function Icon({ img, title, subtitle }) {
  return (
    <div className="icons">
      <img src={img} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}
