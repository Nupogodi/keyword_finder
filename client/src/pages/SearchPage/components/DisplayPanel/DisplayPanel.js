import React, { useState } from 'react';

// Component
import KeywordItem from '../KeywordItem/KeywordItem';

// Styles
import styles from './DisplayPanel.module.css';

const SEARCH_LIMIT = 10;

const DisplayPanel = ({ searchResult = [] }) => {
  const [displayLimit, setDisplayLimit] = useState(SEARCH_LIMIT);
  return (
    <div className={styles['display-panel']}>
      {searchResult.map((keywordObj, index) => {
        if (index < displayLimit) {
          return (
            <KeywordItem
              key={keywordObj.keyword}
              keyword={keywordObj.keyword}
              rating={index + 1}
              count={keywordObj.count}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default DisplayPanel;
