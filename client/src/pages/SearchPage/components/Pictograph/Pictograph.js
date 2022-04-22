import React from 'react';

// Component
import Symbol from '../Symbol/Symbol';

// Styles
import styles from './Pictograph.module.css';

const Pictograph = () => {
  return (
    <div className={styles['pictograph']}>
      Pictograph
      <Symbol />
      <Symbol />
    </div>
  );
};

export default Pictograph;
