import "./SocialItem.css";

function SocialItem(props) {
  let className = `${props.icon} social-icon`;

  return (
    <a href={props.href}>
      <i className={className} />
    </a>
  )
}

export default SocialItem;
