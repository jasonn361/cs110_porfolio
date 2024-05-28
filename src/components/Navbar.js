import Navitem from "./Navitem";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <Navitem id="about" text="About" />
        </li>
        <li>
          <Navitem id="education" text="Education" />
        </li>
        <li>
          <Navitem id="skills" text="Skills" />
        </li>
        <li>
          <Navitem id="experience" text="Experience" />
        </li>
        <li>
          <Navitem id="projects" text="Projects" />
        </li>
        <li>
          <Navitem id="extracurriculars" text="Extracurriculars" />
        </li>
      </ul> 
    </div>
  )
}

export default Navbar;
