import React from "react";
import "./header.scss";
import burgerIcon from "../../images/burgerIcon.png";
import Dropdown from "./Dropdown";

function Header({onSelect}) {
  return (
    <div className='headerContainer'>
      <div className='headerContent image'>
        <img className='burgerIcon' src={burgerIcon} alt='' />
      </div>
      <div className='headerContent title'>
        <h1>BINNIE BOYS BURGERS</h1>
      </div>
      <div className='headerContent menuContainer'>
        <Dropdown onSelect={onSelect}/>
      </div>
    </div>
  );
}

export default Header;
