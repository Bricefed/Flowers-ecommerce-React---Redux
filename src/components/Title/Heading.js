export default function Heading({ title, span }) {
  return (
    <h1 className="heading">
      <span>{span}</span> {title}
    </h1>
  );
}
