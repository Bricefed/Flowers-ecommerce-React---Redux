import QuickLink from "./QuickLink";
import AdditionalLink from "./AdditionalLink";
import Location from "./Location";
import ContactInfo from "./ContactInfo";
import Credit from "./Credit";

export default function Footer() {
  return (
    <footer>
      <section className="footer">
        <div className="col-container">
          <QuickLink />
          <AdditionalLink />
          <Location />
          <ContactInfo />
        </div>
        <Credit />
      </section>
    </footer>
  );
}
