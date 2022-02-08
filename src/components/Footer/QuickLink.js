import { dataLinks } from "../Navigation/data/links";

export default function QuickLink() {
  const quickLink = (item) => {
    return (
      <a key={item.id} href={item.link}>
        {item.name}
      </a>
    );
  };

  return (
    <>
      <div className="col">
        <h3>Liens rapides</h3>
        {dataLinks.map(quickLink)}
      </div>
    </>
  );
}
