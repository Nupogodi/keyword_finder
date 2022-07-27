import React, { useState, useEffect } from 'react';

// Utilities
import { convertToArray, countEntries, sortByCount } from 'utils/calculations';

// Components
import Container from 'components/wrappers/Container/Container';
import DisplayPanel from './components/DisplayPanel/DisplayPanel';
import Sidebar from './components/Sidebar/Sidebar';
import Controls from './components/Controls/Controls';

// Styles
import styles from './SearchPage.module.css';

const KEYWORD_EXCEPTIONS = [
  'be',
  'a',
  'to',
  'we',
  'are',
  'and',
  'by',
  'for',
  'ooo',
  'of',
  '000',
  'with',
];

const SearchPage = () => {
  const [searchContent, setSearchContent] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const cleanArr = convertToArray(searchContent);

    const dataList = countEntries(cleanArr, KEYWORD_EXCEPTIONS);

    const sortedDataList = sortByCount(dataList);

    setSearchResult(sortedDataList);

    console.log(sortedDataList);
  }, [searchContent]);

  const handleChange = (e) => {
    setSearchContent(e.target.value);
  };

  return (
    <div className={styles['search-page']}>
      <Container className={styles.container}>
        <Sidebar />
        <section className={styles.section}>
          <form className={styles.form}>
            <textarea
              placeholder='Enter Text'
              onChange={handleChange}
              value={searchContent}
              className={`${styles['text-area']}`}
            />
          </form>
          <Controls />
        </section>
        <section className={`${styles.section} ${styles.results}`}>
          <DisplayPanel searchResult={searchResult} />
        </section>
      </Container>
    </div>
  );
};

export default SearchPage;
