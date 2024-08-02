import React from 'react';
import {
  ENTREES_BURGERS,
  ENTREES_BURGERS_EXTRAS,
  ENTREES_SPECIALTY_BURGERS,
  ENTREES_CHICKEN_WINGS,
  ENTREES_HOTDOG,
  ENTREES_HOTDOG_EXTRAS,
  ENTREES_SANDWICHES,
  ENTREES_CLUB_SANDWICH,
  ENTREES_SALADS,
  ENTREES_CHICKEN_SALADS,
  ENTREES_MORE,
  ENTREES_MORE_NO_DESCRIPTION,
} from '../../menuItemsLists/entreesList.js';

import './breakfastItems.scss';

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

  const entreesChickenWings = ENTREES_CHICKEN_WINGS.map((element) => {
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

  const entreesHotDog = ENTREES_HOTDOG.map((element) => {
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

  const entreeHotDogExtras = ENTREES_HOTDOG_EXTRAS.map((element) => {
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

  const entreeSandwiches = ENTREES_SANDWICHES.map((element) => {
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

  const entreeClubSandwich = ENTREES_CLUB_SANDWICH.map((element) => {
    return (
      <div className='menu-items'>
        <h3>{element.item}</h3>
        <div className='club-sandwich-price'>{element.price}</div>
      </div>
    );
  });

  const entreeChickenSalad = ENTREES_CHICKEN_SALADS.map((element) => {
    return (
      <div>
        <h3>{element.item}</h3>
        <div className='menu-items'>
          <div>{element.description}</div>
          <div>{element.price}</div>
        </div>
      </div>
    );
  });

  const entreeSalad = ENTREES_SALADS.map((element) => {
    return (
      <div className='menu-items'>
        <h3>{element.item}</h3>
        <div className='club-sandwich-price'>{element.price}</div>
      </div>
    );
  });

  const entreeMoreNoDescription = ENTREES_MORE_NO_DESCRIPTION.map((element) => {
    return (
      <div className='menu-items'>
        <h3>{element.item}</h3>
        <div className='club-sandwich-price'>{element.price}</div>
      </div>
    );
  });

  const entreeMore = ENTREES_MORE.map((element) => {
    return (
      <div>
        <h3>{element.item}</h3>
        <div className='menu-items'>
          <div>{element.description}</div>
          <div>{element.price}</div>
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
      <div>{entreesChickenWings}</div>
      <div>
        {entreesHotDog}
        {entreeHotDogExtras}
      </div>
      <div>
        <h2>Sandwiches</h2>
        {entreeSandwiches}
        <br />
        {entreeClubSandwich}
      </div>
      <div>
        <h2>Salads</h2>
        {entreeSalad}
        {entreeChickenSalad}
      </div>
      <div>
        {entreeMoreNoDescription}
        {entreeMore}
      </div>
    </div>
  );
}

export default EntreesItems;
