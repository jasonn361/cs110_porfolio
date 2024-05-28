import SocialItem from "./SocialItem";
import "./SocialLinks.css";

function SocialLinks() {
  return (
    <div className="social-links-container">
      <SocialItem href="https://github.com/jasonn361" icon="devicon-github-original" />
      <SocialItem href="https://www.linkedin.com/in/huy-nguyen-1403b3239?original_referer=https%3A%2F%2Fwww.google.com%2F" icon="devicon-linkedin-plain" />
    </div>
  );
}

export default SocialLinks;
