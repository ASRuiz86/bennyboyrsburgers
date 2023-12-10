import React from 'react'
import { DESSERT_ITEMS, DRINK_ITEMS } from '../../menuItemsLists/dessertAndDrinksList';
import './breakfastItems.scss';

function DessertandDrinks() {

    const desserts = DESSERT_ITEMS.map((element) => {
        return (
          <div className='menu-items'>
            <div>{element.item}</div>
            <div>{element.price}</div>
          </div>
        );
      });
    const drinks = DRINK_ITEMS.map((element) => {
        return (
          <div className='menu-items'>
            <div>{element.item}</div>
            <div>{element.price}</div>
          </div>
        );
      });
  return (
    <div className='menu-items-container'>
        <div>
            <h2>Dessert</h2>
            {desserts}
        </div>
        <div>
            <h2>Drinks</h2>
            {drinks}
        </div>
    </div>
  )
}

export default DessertandDrinks