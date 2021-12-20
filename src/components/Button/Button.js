import React from 'react';
import s from './Button.module.css';

const Button = ({ onClick }) => (
  <button className={s.Button} type="button" onClick={onClick}>
    Load more
  </button>
);

export default Button;
