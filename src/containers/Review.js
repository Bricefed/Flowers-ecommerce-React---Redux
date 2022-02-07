import Card from "../components/Review/Card";
import Heading from "../components/Title/Heading";
import { dataUser } from "../components/Review/data/user";

export default function Review() {
  const card = (item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        name={item.name}
        subtitle={item.subtitle}
        review={item.review}
      />
    );
  };
  return (
    <section className="review" id="review">
      <Heading span="Retour" title="clients" />
      <div className="card-container">{dataUser.map(card)}</div>
    </section>
  );
}
