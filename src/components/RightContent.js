import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import "./RightContent.css";

function RightContent() {
  return (
    <div className="right-content-container">
      <AboutMe />
      <Education />
      <Skills />
      <Experience />
    </div>
  );
}

export default RightContent;
