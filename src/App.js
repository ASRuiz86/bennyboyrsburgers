import Banner from './components/Banner';
import menu from './images/menu.jpg';
import './App.css'

function App() {
  return (
    <div>
      <Banner></Banner>
      <img src={menu} alt='Menu' />
    </div>
  );
}

export default App;
