export default function Stars() {
  const star = (x, i) => {
    return <i key={i} className="fa fa-star"></i>;
  };
  return <div className="stars">{Array.from({ length: 5 }).map(star)}</div>;
}
