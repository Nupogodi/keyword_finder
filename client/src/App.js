import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Constants
import { ROUTES } from 'utils/constants';

// Pages
import LandingPage from 'pages/LandingPage/LandingPage';
import SearchPage from 'pages/SearchPage/SearchPage';

// Components
import Navigation from 'components/layout/Navigation/Navigation';
import Footer from 'components/layout/Footer/Footer';

// Styles
import styles from './App.module.css';
import 'assets/styles/main.css';

const App = () => (
  <div className={styles.App}>
    <BrowserRouter>
      <nav className={styles.nav}>
        <Navigation />
      </nav>
      <main className={`${styles.content}`}>
        <Routes>
          <Route exact path={ROUTES.home.url} element={<LandingPage />} />
          <Route exact path={ROUTES.search.url} element={<SearchPage />} />
        </Routes>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </BrowserRouter>
  </div>
);

export default App;
