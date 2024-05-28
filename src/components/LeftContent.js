import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import "./LeftContent.css";

function LeftContent() {
  return (
    <div className="left-content-container">
      <HeroSection />
      <Navbar />
      <SocialLinks />
    </div>
  )
}

export default LeftContent;
