import React from "react";
import {
  ENTREES_BURGERS,
  ENTREES_BURGERS_EXTRAS,
  ENTREES_SPECIALTY_BURGERS,
} from "../../menuItemsLists/entreesList.js";

import "./breakfastItems.scss";

function EntreesItems() {
  const entreeBurgers = ENTREES_BURGERS.map((element) => {
    return (
      <div className='menu-items'>
        <div>{element.item}</div>
        <div>{element.price}</div>
      </div>
    );
  });
  const entreeBurgersExtras = ENTREES_BURGERS_EXTRAS.map((element) => {
    return (
      <div className='menu-items-entree-extras'>
        {element.item}
        <div className='menu-items'>
          <div>{element.description}</div>
          <div className='breakfast-items-plate-price'>{element.price}</div>
        </div>
      </div>
    );
  });
  const entreesSpecialtyBurgers = ENTREES_SPECIALTY_BURGERS.map((element) => {
    return (
      <div>
        <h3>{element.item}</h3>
        <div className='menu-items'>
          <div>{element.description}</div>
          <div className='breakfast-items-plate-price'>{element.price}</div>
        </div>
      </div>
    );
  });

  return (
    <div className='menu-items-container'>
      <div>
        <h2>Burgers with Chips or Fries</h2>
        {entreeBurgers}
        {entreeBurgersExtras}
      </div>
      <h2>Specialty Burgers</h2>
      <div>{entreesSpecialtyBurgers}</div>
    </div>
  );
}

export default EntreesItems;
