export default function User({ img, name, subtitle }) {
  return (
    <>
      <div className="user">
        <img src={img} alt={name} />
        <div className="user-info">
          <h3>{name}</h3>
          <span>{subtitle}</span>
        </div>
      </div>
      <span className="fa fa-quote-right"></span>
    </>
  );
}
