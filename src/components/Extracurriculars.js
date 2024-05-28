import TimeCard from "./TimeCard";
import "./Extracurriculars.css";
import "./AboutMe.css";

function Extracurriculars() {
  return (
    <div className="extracurriculars-container" id="extracurriculars">
      <h2 className="title">Extracurriculars</h2> 
      <TimeCard 
        time_range="2023"
        header="Cutie Hack"
      />
      <TimeCard 
        time_range="2023"
        header="Rose Hack"
      />
    </div>
  );
}

export default Extracurriculars;
