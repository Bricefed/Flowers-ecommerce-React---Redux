import Input from "./Input";

export default function Form() {
  return (
    <form>
      <Input type="text" placeholder="Nom" name="name" />
      <Input type="email" placeholder="Email" name="email" />
      <Input type="number" placeholder="Téléphone" name="tel" />
      <textarea
        placeholder="Message"
        name="message"
        id="message"
        className="inputs"
      ></textarea>
      <input type="submit" value="Envoyer" className="btn" />
    </form>
  );
}
