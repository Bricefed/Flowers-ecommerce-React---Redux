export default function Heading({ span, title }) {
  return (
    <h1 className="heading">
      <span>{span}</span> {title}
    </h1>
  );
}
