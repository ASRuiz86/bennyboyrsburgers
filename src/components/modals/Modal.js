import React from 'react';
import anniversaryFlyer from '../../images/june_17th_flyer.jpg';
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
        <img className='anniversaryFlyer' src={anniversaryFlyer} alt='' />
      </div>
    </div>
  );
};

export default Modal;
