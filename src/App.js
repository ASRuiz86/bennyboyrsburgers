import React, {useState} from 'react';
import Banner from './components/Banner';
import menu from './images/NewMenu2022.jpg';
import './App.css';
import ThursdaySpecial from './components/ThursdaySpecial';
// import Modal from './components/modals/Modal';

function App() {
  // <Modal open={openModal} onClose={() => setOpenModal(false)} />
  // const [openModal, setOpenModal] = useState(true);

  return (
    <div>
     
      <Banner></Banner>
      <ThursdaySpecial />
      <img src={menu} alt='Menu' />
    </div>
  );
}

export default App;
