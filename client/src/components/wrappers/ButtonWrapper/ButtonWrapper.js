import React from 'react';

// styles
import styles from './ButtonWrapper.module.css';

const ButtonWrapper = ({
  onClick,
  className = '',
  type = 'button',
  children,
}) => (
  <button
    type={type}
    style={styles}
    className={`${className} ${styles['default-styles']}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default ButtonWrapper;
