import foodTruck from '../images/foodTruck.jpg';
import burger from '../images/Food Images/burger.jpg';
import wings from '../images/Food Images/wings.jpg';
import './banner.scss';

function Banner() {
  return (
    <div className='banner'>
      <img className='foodItem' src={burger} alt='Jalapeno Burger' />

      <img className='foodtruck' src={foodTruck} alt='Food Truck' />

      <img className='foodItem' src={wings} alt='Buffalo Wings' />
    </div>
  );
}

export default Banner;
