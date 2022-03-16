import './thursdayspecial.scss';
// import chickenDumplings from '../images/thursdayspecial_01_05.jpg';

function ThursdaySpecial() {
  return (
    <div className='mid-section'>
      {/* <div className='temp-section'>
        <img src={chickenDumplings} alt='Thursday Special 01/05' />
        
      </div> */}

      <div className='left-mid-section'>
        <h2>St. Patrick's Day Special</h2>
        <p> 03/17/2022</p>
        <span>
          Sheppards Pie, Fried Cabbage, Dinner Roll, Green Cookie and Tea
        </span>
        <p>$11.95</p>
      </div>

      <div className='right-mid-section'>
        <h2>Hours</h2>
        <ul>
          <h3>Sunday</h3>
          <li>8am - 2pm</li>
          <h3>Monday</h3>
          <li>CLOSED</li>
          <h3>Tuesday</h3>
          <li>CLOSED</li>
          <h3>Wednesday</h3>
          <li>CLOSED</li>
        </ul>
        <ul>
          <h3>Thursday</h3>
          <li>10:30am - 2pm</li>
          <li>5pm - 7pm</li>
          <h3>Friday</h3>
          <li>10:30am - 2pm</li>
          <li>5pm - 7pm</li>
          <h3>Saturday</h3>
          <li>8am - 8pm</li>
        </ul>
      </div>
    </div>
  );
}

export default ThursdaySpecial;
