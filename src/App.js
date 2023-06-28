import React, {useState} from 'react';
import Banner from './components/Banner';
import menu from './images/NewMenu2022.jpg';
import './App.css';
import ThursdaySpecial from './components/ThursdaySpecial';
import Modal from './components/modals/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <Banner></Banner>
      <ThursdaySpecial />
      <img src={menu} alt='Menu' />
    </div>
  );
}

export default App;
