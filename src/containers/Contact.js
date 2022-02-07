import Heading from "../components/Title/Heading";
import Form from "../components/Contact/Form";
import Image from "../components/Contact/Image";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Heading span="Nous" title="contacter" />
      <div className="row">
        <Form />
        <Image />
      </div>
    </section>
  );
}
