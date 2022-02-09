export default function Image() {
  return (
    <div className="image">
      <img
        src={process.env.PUBLIC_URL + "assets/img/contact/contact-img.svg"}
        alt="Contact"
      />
    </div>
  );
}
