import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Extracurriculars from "./Extracurriculars";
import "./RightContent.css";

function RightContent() {
  return (
    <div className="right-content-container">
      <AboutMe />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Extracurriculars />
    </div>
  );
}

export default RightContent;
