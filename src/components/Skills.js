import SkillItem from "./SkillItem";
import "./Skills.css";
import "./AboutMe.css";

function Skills() {
  return (
    <div className="skills-container" id="skills">
      <h2 className="title">Skills</h2>
      <div className="skills-list">
        <SkillItem icon="devicon-cplusplus-plain" skill="C++"/>
        <SkillItem icon="devicon-html5-plain" skill="HTML"/>
        <SkillItem icon="devicon-css3-plain" skill="CSS"/>
        <SkillItem icon="devicon-java-plain" skill="Java"/>
        <SkillItem icon="devicon-javascript-plain" skill="JavaScript"/>
        <SkillItem icon="devicon-sqlite-plain" skill="SQLite"/>
        <SkillItem icon="devicon-python-plain" skill="Python"/>
        <SkillItem icon="devicon-git-plain" skill="Git"/>
        <SkillItem icon="devicon-react-original" skill="React"/>
        <SkillItem icon="devicon-django-plain" skill="Django"/>
        <SkillItem icon="devicon-hadoop-plain" skill="Hadoop"/>
        <SkillItem icon="devicon-apachespark-original" skill="Spark"/>
      </div>
    </div>
  );
}

export default Skills;
