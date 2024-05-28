import "./SocialItem.css";

function SocialItem(props) {
  return (
    <a href={props.href}>
      <img className="icon" src={props.src} alt={props.alt} />
    </a>
  )
}

export default SocialItem;
