import React from 'react';
import cornHole from '../../images/cornhole.jpg';
import './Modal.scss';

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img className='cornHoleimg' src={cornHole} alt='' />
        <div className='modalRight'>
          <p onClick={onClose} className='closeBtn'>
            X
          </p>
          <div className='content'>
            <h1>Cornhole Tournament</h1>
            <h2>Saturday April 23rd, @ 3pm</h2>
            <p>
              Entry fee $10 per person. 1st place receives 70% of entry fees.
              2nd place receives 30% of entry fees. 
              <br/>
              Call Gary anytime to signup (4323491538) or signup at Binnie Boys Burgers. 
              Please signup before 2:30pm the day of the tournament.
              <br/>
              Bring Your Ice Chests!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
