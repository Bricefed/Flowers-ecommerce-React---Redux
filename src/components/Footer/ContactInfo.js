import { dataContact } from "./data/contact";

export default function ContactInfo() {
  const contact = (item) => {
    return (
      <a key={item.id} href={item.link}>
        {item.value}
      </a>
    );
  };
  return (
    <div className="col">
      <h3>Infos contact</h3>
      {dataContact.map(contact)}
      <img
        src={process.env.PUBLIC_URL + "/assets/img/footer/payment.png"}
        alt="Carte de payement"
      />
    </div>
  );
}
