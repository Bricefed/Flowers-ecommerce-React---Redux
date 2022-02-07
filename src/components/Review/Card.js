import Stars from "./Stars";
import User from "./User";

export default function Card({ review, img, name, subtitle }) {
  return (
    <div className="card">
      <Stars />
      <p>{review}</p>
      <User img={img} name={name} subtitle={subtitle} />
    </div>
  );
}
