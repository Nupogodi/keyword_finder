import React from 'react';

// Components
import Container from 'components/wrappers/Container/Container';
import DisplayPanel from './components/DisplayPanel/DisplayPanel';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';

// Styles
import styles from './SearchPage.module.css';

// eslint-disable-next-line
const SearchPage = () => {
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
