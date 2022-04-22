import React from 'react';

// styles
import btnStyles from './Button.module.css';

const Button = ({
  btnType = 'button',
  text,
  btnStyle = 'outline',
  btnColor = 'light',
  OnClick,
  className = {},
  children,
}) => (
  <button
    value={text}
    type={btnType}
    onClick={OnClick}
    className={`${btnStyles[btnStyle]} ${btnStyles[btnColor]} ${btnStyles.btn} ${className}`}
  >
    {children} {text}
  </button>
);

export default Button;
