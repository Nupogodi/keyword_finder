import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// constants
import { ROUTES, ICON_TYPES } from 'utils/constants';

// components
import ButtonWrapper from 'components/wrappers/ButtonWrapper/ButtonWrapper';
import Container from 'components/wrappers/Container/Container';
import Icon from 'components/Icon/Icon';

// Styles
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={`${styles.nav} radShadow surface4`}>
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
