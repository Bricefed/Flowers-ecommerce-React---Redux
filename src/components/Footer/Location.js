import { dataLocation } from "./data/location";

export default function Location() {
  const location = (item) => {
    return (
      <a key={item.link} href={item.link} target="_blank">
        {item.country}
      </a>
    );
  };
  return (
    <div className="col">
      <h3>Localisation</h3>
      {dataLocation.map(location)}
    </div>
  );
}
