import Banner from './components/Banner';
import menu from './images/menu.jpg';
import './App.css';
import ThursdaySpecial from './components/ThursdaySpecial';

function App() {
  return (
    <div>
      <Banner></Banner>
      <ThursdaySpecial />
      <img src={menu} alt='Menu' />
    </div>
  );
}

export default App;
