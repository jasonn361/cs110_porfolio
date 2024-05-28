import SocialItem from "./SocialItem";
import "./SocialLinks.css";

function SocialLinks() {
  return (
    <div className="social-links-container">
      <SocialItem href="https://github.com/jasonn361" src="/White_Github.png" alt="white github logo" />
      <SocialItem href="https://www.linkedin.com/in/huy-nguyen-1403b3239?original_referer=https%3A%2F%2Fwww.google.com%2F" src="/White_LinkedIn.png" alt="white linkedin logo" />
    </div>
  );
}

export default SocialLinks;
