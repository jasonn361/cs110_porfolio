import "./Navitem.css";
import React from 'react';

function Navitem(props) {
  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 125;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <a href={`#${props.id}`} className="nav-link" onClick={(e) => handleClick(e, props.id)}>
      <span className="nav-indicator"></span>
      <span className="nav-text">{props.text}</span>
    </a> 
  );
}

export default Navitem;
