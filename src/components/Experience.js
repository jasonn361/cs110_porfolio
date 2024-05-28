import TimeCard from "./TimeCard";
import "./Experience.css";
import "./AboutMe.css";

function Experience() {
  return (
    <div class="experience-container" id="experience">
      <h2 className="title">Experience</h2>
      <TimeCard 
        time_range="2022 — 2024"
        header="Microchips and Robotics Intern - NASA CaSGC" 
        paragraph="As the team leader for a moon rover project, 
        I directed a group of five engineers in the design and 
        development of an automated moon rover. My role was pivotal 
        in conceptualizing and implementing a GPS navigation system 
        that significantly improved the rover’s navigation accuracy 
        and operational efficiency." 
      />
      <TimeCard 
        time_range="2019 — 2020"
        header="Web Developer Intern - Tiny Provider LLC" 
        paragraph="I designed and developed a prototype website 
        for presentation to potential clients, demonstrating our 
        technical and design capabilities. After receiving feedback, 
        I undertook significant revisions to better align with client
        expectations and specific requirements. These enhancements
        focused on improving functionality and user engagement, 
        ensuring the final product was both aesthetically pleasing
        and tailored to meet each client’s unique needs."
      />
    </div>
  );
}

export default Experience;
