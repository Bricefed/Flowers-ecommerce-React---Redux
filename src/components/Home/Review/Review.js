import Card from "./Card";
import Heading from "../../Title/Heading";
import { dataUser } from "./data/user";

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
      <div className="cards-container">{dataUser.map(card)}</div>
    </section>
  );
}
