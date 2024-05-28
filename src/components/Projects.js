import ProjectItem from "./ProjectItem";
import "./Projects.css";
import "./AboutMe.css";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2 className="title">Projects</h2>   
      <ProjectItem
        href="https://github.com/jasonn361/cs110project"
        src={`${process.env.PUBLIC_URL}/beam.png`}
        alt="Online Video Game Storefront"
        header="Video Game Sharing Site"
        paragraph="lskjflksajfkljaslkfj"
      />
      <ProjectItem
        href="https://github.com/jasonn361/CS166-Phase-3"
        src={`${process.env.PUBLIC_URL}/amazon.jpeg`}
        alt="Amazon Database Clone"
        header="Amazon Database + Storefront"
        paragraph="lskjflksajfkljaslkfj"
      />
    </div>
  );
}

export default Projects;
