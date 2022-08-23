import React from 'react';
import { NavLink } from 'react-router-dom';

// constants
import { ROUTES } from 'utils/constants';

// components
import Container from 'components/wrappers/Container/Container';

// Styles
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={`${styles.nav} surface1`}>
    <Container className={styles.flexContainer}>
      <NavLink className={styles.link} exact to={ROUTES.home.url}>
        <h2 className={styles.logo}>Keyword Finder</h2>
      </NavLink>
      <ul className={styles.navList}>
        {Object.entries(ROUTES).map(([key, value]) => (
          <li className={styles.navItem} key={key}>
            <NavLink className={styles.link} exact to={value.url}>
              {value.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </Container>
  </nav>
);

export default Navigation;
