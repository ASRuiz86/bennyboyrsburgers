import React from "react";
import "./tabButton.scss";

function TabButton(props) {

  return (
    <li>
      <button onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}

export default TabButton;
