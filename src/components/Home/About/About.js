import VideoContainer from "./VideoContainer";
import Content from "./Content";
import Heading from "../../../components/Title/Heading";

export default function About() {
  return (
    <section className="about" id="about">
      <Heading span="À propos" title="de nous" />
      <div className="row">
        <VideoContainer />
        <Content />
      </div>
    </section>
  );
}
