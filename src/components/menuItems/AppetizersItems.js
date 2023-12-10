import React from 'react';
import { APPETIZER_ITEMS } from '../../menuItemsLists/appetizerList';
import './breakfastItems.scss';

function AppetizersItems() {

    const appetizersAndSides = APPETIZER_ITEMS.map((element) => {
        return (
          <div className='menu-items'>
            <div>{element.item}</div>
            <div>{element.price}</div>
          </div>
        );
      });

  return (
    <div className='menu-items-container'>
      <h2>APPETIZERS/SIDES</h2>
      {appetizersAndSides}
    </div>
  );
}

export default AppetizersItems;
