import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import BreakfastItems from "./components/menuItems/BreakfastItems";
import EntreesItems from "./components/menuItems/EntreesItems";

function App() {
  // const [openModal, setOpenModal] = useState(true);
  const [menuSelected, setMenuSelected] = useState(false);
  const [menuItemsSelected, setMenuItemsSelected] = useState('');

  const handleSelect = (selectedMenu) => {
    console.log(selectedMenu);
    setMenuItemsSelected(selectedMenu);
    setMenuSelected(true);
  };

  const menuItems = () => {
    switch(menuItemsSelected) {
        case "Breakfast":
          return <BreakfastItems />;
          break;
        case "Entree":
          return <EntreesItems />
          break;
        case "Sides":
          return <EntreesItems />
          break;
        case "Drinks":
          return <EntreesItems />
          break;
        default:
          return null;
    }
  }

  return (
    <div>
      <div>
        <Header onSelect={handleSelect} />
      </div>
      <div className='body-container'>{menuSelected && menuItems()}</div>
    </div>
  );
}

export default App;
