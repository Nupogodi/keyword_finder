import React from 'react';

// Styles
import styles from './Symbol.module.css';

const Symbol = ({keyword, rating, count}) => {
  return (
    <div className={styles['symbol']}>
      <div className={styles['rating']}>1.</div>
      <div className={styles['keyword']}>Keyword</div>
      <div className={styles['count']}>3 times</div>
    </div>
  );
};

export default Symbol;
