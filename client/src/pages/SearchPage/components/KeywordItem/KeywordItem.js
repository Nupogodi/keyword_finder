import React from 'react';

// Styles
import styles from './KeywordItem.module.css';

const KeywordItem = ({ keyword, rating, count }) => (
  <div className={styles['keyword-item']}>
    <div className={styles['rating']}>{rating}</div>
    <div className={styles['keyword']}>{keyword}</div>
    <div className={styles['count']}>{count}</div>
  </div>
);

export default KeywordItem;
