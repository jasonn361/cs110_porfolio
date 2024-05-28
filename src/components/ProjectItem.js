import "./TimeCard.css";
import "./ProjectItem.css";

function ProjectItem(props) {
  return (
    <a href={props.href} className="timecard-container">
      <img src={props.src} className="project-image" alt={props.alt}/>
      <div className="timecard-header-container">
        <h3 className="timecard-header">{props.header}</h3>
        <p className="timecard-p">{props.paragraph}</p>
      </div>
    </a>
  );
}

export default ProjectItem;
