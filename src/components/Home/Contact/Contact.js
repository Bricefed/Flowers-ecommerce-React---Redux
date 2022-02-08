import Heading from "../../Title/Heading";
import Form from "./Form";
import Image from "./Image";

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
