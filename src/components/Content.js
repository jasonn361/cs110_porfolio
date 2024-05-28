import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import "./Content.css";

function Content() {
  return (
    <div className="content-container"> 
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Content;
