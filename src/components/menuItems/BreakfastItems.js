import React from "react";
import {
  BREAKFAST_TACOS,
  BREAKFAST_PLATE,
  BREAKFAST_SANDWICH,
} from "../../menuItemsLists/breakfastList";

import "./breakfastItems.scss";

function BreakfastItems() {
  const breakfastTacos = BREAKFAST_TACOS.map((element) => {
    return (
      <div className='menu-items'>
        <div>{element.item}</div>
        <div>{element.price}</div>
      </div>
    );
  });
  const breakfastSandwich = BREAKFAST_SANDWICH.map((element) => {
    return (
      <div className='menu-items'>
        <div>{element.item}</div>
        <div>{element.price}</div>
      </div>
    );
  });
  const breakfastPlate = BREAKFAST_PLATE.map((element) => {
    return (
      <div>
        <h2>{element.item}</h2>
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
        <h2>Breakfast Tacos</h2>
        {breakfastTacos}
      </div>
      <div>
        <h2>Breakfast Sandwich</h2>
        {breakfastSandwich}
      </div>
      <div>{breakfastPlate}</div>
    </div>
  );
}

export default BreakfastItems;
