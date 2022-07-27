import React from 'react';

// styles
import btnStyles from './Button.module.css';

const Button = ({
  btnType = 'button',
  btnStyle = 'outline',
  btnColor = 'light',
  OnClick,
  className = {},
  children,
}) => (
  <button
    type={btnType}
    onClick={OnClick}
    className={`${btnStyles[btnStyle]}  ${btnStyles.btn} ${className}`}
  >
    {children}
  </button>
);

export default Button;
