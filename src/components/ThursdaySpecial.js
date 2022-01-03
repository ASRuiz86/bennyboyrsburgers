import './thursdayspecial.scss';
// import turkeyBacon from '../images/thursdaySpecial_12_23.jpg';
// import christmasHours from '../images/christmasHours.jpg';

function ThursdaySpecial() {
  return (
    <div className='mid-section'>
      {/* <div className='temp-section'>
        <img src={turkeyBacon} alt='Thursday Special 12/23' />
        <img src={christmasHours} alt='Christmas Hours' />
      </div> */}

      {/* <div className='left-mid-section'>
        
        <h2>Thursday Special</h2>
        <p> 12/16/21</p>
        <span>Bev's scrumptious smothered pork chops, broccoli cauliflower medley, red potatoes roasted with garlic and rosemary, bread pudding with special sauce, and Iced Tea</span>
        <p>$12.50</p>
      </div> */}
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
