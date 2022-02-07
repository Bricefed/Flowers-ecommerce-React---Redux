export default function VideoContainer() {
  return (
    <div className="video-container">
      <video loop autoPlay muted>
        <source src={"./assets/video/about-vid.mp4"} type="video/mp4" />
      </video>
      <h3>Meilleurs vendeurs de fleurs</h3>
    </div>
  );
}
