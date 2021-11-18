import foodTruck from '../images/foodTruck.jpg';
import pecanPie from '../images/Food Images/pecanPie.jpg';
import coconutPie from '../images/Food Images/coconutCreamPie.jpg';
import './banner.scss';

function Banner() {
  return (
    <div className='banner'>
      <img className='pie' src={pecanPie} alt='Pecan Pie' />

      <img className='foodtruck' src={foodTruck} alt='Food Truck' />

      <img className='pie' src={coconutPie} alt='Coconut Cream Pie' />
    </div>
  );
}

export default Banner;
