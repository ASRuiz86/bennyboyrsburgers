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
            <h2>Saturday April 2nd</h2>
            <p>
              Entry fee $10 per person. Sign ups start Thursday March 31st @
              Binnie Boys. Will draw for teams on Saturday April 2nd, at 1:30
              p.m. 1st place: 60% of entry fee 2nd place: 40% of entry fee.
              Rules will be announced at the time of the team drawing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
