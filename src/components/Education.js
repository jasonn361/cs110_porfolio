import TimeCard from "./TimeCard";
import "./Education.css";
import "./AboutMe.css";

function Education() {
  return (
    <div className="education-container" id="education">
      <h2 className="title">Education</h2>
      <TimeCard
        time_range="2022 — 2024"
        header="B.S. Computer Science" 
        paragraph="University of Riverside, California" 
      /> 
      <TimeCard
        time_range="2019 — 2022"
        header="A.S. Behavorial Science" 
        paragraph="Norco College" 
      /> 
      <TimeCard
        time_range="2019 — 2022"
        header="A.S. Math and Science" 
        paragraph="Norco College" 
      /> 
      <TimeCard
        time_range="2019 — 2022"
        header="A.S. Computer Science" 
        paragraph="Norco College" 
      /> 
    </div>  
  );
}

export default Education;
