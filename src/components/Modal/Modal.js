import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

function Modal({ bigImg, onClose }) {
  useEffect(() => {
    const handleModal = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleModal);

    return () => {
      window.removeEventListener('keydown', handleModal);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <button className={s.Button} type="button" onClick={onClose}></button>
        <img src={bigImg} alt="" width="560" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  bigImg: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
