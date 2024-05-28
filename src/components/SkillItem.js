import "./SkillItem.css";

function SkillItem(props) {
  let className = `${props.icon} skill-icon`;

  return (
    <div className="skill-container">
      <i class={className}></i> 
      <h3 className="skill-text">{props.skill}</h3>
    </div>
  );
}

export default SkillItem;
