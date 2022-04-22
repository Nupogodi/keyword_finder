import React, { useState, useEffect } from 'react';

// Components
import Container from 'components/wrappers/Container/Container';
import Pictograph from './components/Pictograph/Pictograph';
// Styles
import styles from './SearchPage.module.css';

const SearchPage = () => {
  const [searchContent, setSearchContent] = useState('');
  useEffect(() => {
    const calculate = (string) => {
      // Remove all non letter symbols and create a clean, sorted array of words
      const cleanArr = string
        .replace(/[\W_]+/g, ' ')
        .split(' ')
        .sort();

      console.log(cleanArr);
    };

    calculate(searchContent);
  }, [searchContent]);

  const handleChange = (e) => {
    setSearchContent(e.target.value);

    console.log(searchContent);
  };

  return (
    <div className={styles['search-page']}>
      <Container className={styles['container']}>
        <section className={styles['section']}>
          <form className={styles['form']}>
            {/* <h3 className={styles['heading']}>Enter Text </h3> */}
            <textarea
              placeholder='Enter Text'
              onChange={handleChange}
              value={searchContent}
              className={`${styles['text-area']}`}
            />
          </form>
        </section>
        <section className={`${styles['section']} ${styles['results']}`}>
          <Pictograph />
        </section>
      </Container>
    </div>
  );
};

export default SearchPage;
