import "./SkillItem.css";

function SkillItem(props) {
  return (
    <div className="skill-container">
      <i class={props.icon}></i> 
      <h3 className="skill-text">{props.skill}</h3>
    </div>
  );
}

export default SkillItem;
