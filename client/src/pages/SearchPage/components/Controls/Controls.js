import React from 'react';

// Constants

import { BTN_TYPES, BTN_STYLES } from 'utils/constants';

// Components
import Button from 'components/Button/Button';

// Styles
import styles from './Controls.module.css';

// eslint-disable-next-line
const Controls = ({ onClick }) => {
  return (
    <div className={styles.controls}>
      <Button
        onClick={onClick}
        btnType={BTN_TYPES.button}
        btnStyle={BTN_STYLES.dark}
        className={styles.button}
      >
        Add
      </Button>
    </div>
  );
};

export default Controls;
