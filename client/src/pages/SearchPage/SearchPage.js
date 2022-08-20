import React, { useState, useEffect, useContext } from 'react';

// Context
import SearchContext from 'context/SearchContext';

// Utilities
import { convertToArray, countEntries, sortByCount } from 'utils/calculations';

// Components
import Container from 'components/wrappers/Container/Container';
import DisplayPanel from './components/DisplayPanel/DisplayPanel';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';

// Styles
import styles from './SearchPage.module.css';

// eslint-disable-next-line
const SearchPage = () => {
  // useEffect(() => {
  //   const cleanArr = convertToArray(searchContent);

  //   const dataList = countEntries(cleanArr, KEYWORD_EXCEPTIONS);

  //   const sortedDataList = sortByCount(dataList);

  //   setSearchResult(sortedDataList);
  // }, [searchContent]);

  return (
    <div className={styles.searchPage}>
      <Container className={styles.container}>
        <Sidebar />
        <Form />
        <DisplayPanel />
      </Container>
    </div>
  );
};

export default SearchPage;
