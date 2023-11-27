import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import "./dropdown.scss";
import TabButton from "./TabButton";

function Dropdown({onSelect}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='dropdown-menu' onClick={() => setIsOpen((prev) => !prev)}>
      <span>
        Menu
        {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
      </span>

      {isOpen && (
        <div className='dropdown-open-container'>
          <ul>
            <TabButton onSelect={() => {onSelect('Breakfast')}}>Breakfast</TabButton>
            <TabButton onSelect={() => {onSelect('Entree')}}>Entree</TabButton>
            <TabButton onSelect={() => {onSelect('Sides')}}>Appetizer/Sides</TabButton>
            <TabButton onSelect={() => {onSelect('Drinks')}}>Drinks</TabButton>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
