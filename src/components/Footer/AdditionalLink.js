import { dataAdditionaLink } from "./data/additionaLink";

export default function AdditionalLink() {
  const additionaLink = (item) => {
    return (
      <a key={item.id} href={item.link}>
        {item.name}
      </a>
    );
  };

  return (
    <div className="col">
      <h3>Liens supp.</h3>
      {dataAdditionaLink.map(additionaLink)}
    </div>
  );
}
