import "./ProjectItem.css";

function ProjectItem() {
  return (
  <div className="timecard-container">
    <div className="time-range">{props.time_range}</div>
    <div className="timecard-header-container">
      <h3 className="timecard-header">{props.header}</h3>
      <p className="timecard-p">{props.paragraph}</p>
    </div>
  </div>
  );
}
