import './thursdayspecial.scss';


function ThursdaySpecial() {
  return (
    <div className='mid-section'>
      {/* <div className='left-mid-section'>
        <h2>Thursday Special</h2>
        <br />
        <p> 07/21/2022</p>
        <span>
          Salisbury Steak, Gravy, Garlic Mashed Potatoes, Sweet Corn, Dinner
          Roll and Iced Tea
        </span>
        <p>$11.95</p>
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
          <li>10:30am - 8pm</li>
          <h3>Saturday</h3>
          <li>8am - 8pm</li>
        </ul>
      </div>
    </div>
  );
}

export default ThursdaySpecial;
