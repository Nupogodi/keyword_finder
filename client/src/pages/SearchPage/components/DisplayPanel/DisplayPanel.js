import React, { useState, useEffect, useContext } from 'react';

// Context
import SearchContext from 'context/SearchContext';

// Component
import KeywordItem from '../KeywordItem/KeywordItem';

// Styles
import styles from './DisplayPanel.module.css';

const SEARCH_LIMIT = 10;

const DisplayPanel = ({ searchResult = [] }) => {
  const searchContext = useContext(SearchContext);

  const { documents } = searchContext;

  // eslint-disable-next-line
  const [displayLimit, setDisplayLimit] = useState(SEARCH_LIMIT);
  return (
    <div className={styles.displayPanel}>
      <h2>Results</h2>
      {/* {searchResult.map((keywordObj, index) => {
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
      })} */}
    </div>
  );
};

export default DisplayPanel;
