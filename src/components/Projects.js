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
        paragraph="BEAM is an innovative online game-sharing platform that 
        enables users to buy, sell, borrow, and trade games instantly online, 
        removing the need for physical exchanges and reducing wait times.
        Utilizing technologies like React.js, OAuth, and MongoDB, the platform
        ensures seamless transactions and robust security for all users. The
        service features a community marketplace, user profiles with 
        customizable privacy settings, and social networking capabilities, 
        making it a comprehensive solution for modern gamers."
      />
      <ProjectItem
        href="https://github.com/jasonn361/CS166-Phase-3"
        src={`${process.env.PUBLIC_URL}/amazon.jpeg`}
        alt="Amazon Database Clone"
        header="Amazon Database + Storefront"
        paragraph="Amazon Database + UI is a specialized project designed to 
        streamline inventory and ordering processes for store managers and 
        users across multiple retail locations. Leveraging MySQL for robust 
        database management and Java for the terminal-based user interface,
        the system enables managers to order and request restocks efficiently.
        Additionally, it provides a seamless ordering experience for users, 
        allowing them to purchase items from various stores directly through
        the intuitive interface."
      />
    </div>
  );
}

export default Projects;
