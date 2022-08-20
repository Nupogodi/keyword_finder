import React, { useContext } from 'react';

// Context
import SearchContext from 'context/SearchContext';

// Constants
import { BTN_TYPES, BTN_STYLES } from 'utils/constants';

// Components
import Button from 'components/Button/Button';

// Styles
import styles from './Form.module.css';

const Form = () => {
  const searchContext = useContext(SearchContext);

  const {
    searchContent,
    setSearchContent,
    isModifying,
    addDocument,
    removeDocument,
    modifyDocument,
    deselectDocument,
  } = searchContext;

  const handleChange = (e) => {
    setSearchContent(e.target.value);
  };

  return (
    <form className={styles.form}>
      <textarea
        placeholder='Enter Text'
        onChange={handleChange}
        value={searchContent}
        className={styles.textArea}
      />
      <div className={styles.formControls}>
        {isModifying ? (
          <>
            <Button
              onClick={deselectDocument}
              btnType={BTN_TYPES.button}
              btnStyle={BTN_STYLES.dark}
              className={styles.button}
            >
              Cancel
            </Button>
            <Button
              onClick={modifyDocument}
              btnType={BTN_TYPES.button}
              btnStyle={BTN_STYLES.dark}
              className={styles.button}
            >
              Save
            </Button>
          </>
        ) : (
          <Button
            onClick={addDocument}
            btnType={BTN_TYPES.button}
            btnStyle={BTN_STYLES.dark}
            className={styles.button}
          >
            Add
          </Button>
        )}
      </div>
    </form>
  );
};

export default Form;
