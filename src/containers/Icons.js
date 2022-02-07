import Icon from "../components/Icons/Icon";

export default function Icons() {
  return (
    <section className="icons-container">
      <Icon
        img="assets/illustrations/icon-1.png"
        title="Livraison gratuite"
        subtitle="Sur toutes les commandes"
      />
      <Icon
        img="assets/illustrations/icon-2.png"
        title="Retours sous 10 jours"
        subtitle="Remboursement garentie"
      />
      <Icon
        img="assets/illustrations/icon-3.png"
        title="Offre &amp; cadeaux"
        subtitle="Sur toutes les commandes"
      />
      <Icon
        img="assets/illustrations/icon-4.png"
        title="Paiements sécurisés"
        subtitle="Protégé par paypal"
      />
    </section>
  );
}
