import React, { useContext } from 'react';
import classnames from 'classnames/bind';

// Context
import SearchContext from 'context/SearchContext';

// Constants
import { ICON_TYPES, BTN_TYPES } from 'utils/constants';

// Components
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';

// Styles
import styles from './Sidebar.module.css';

const cx = classnames.bind(styles);

// eslint-disable-next-line
const Sidebar = () => {
  const searchContext = useContext(SearchContext);

  const { selectDocument, selectedDocumentID, documents } = searchContext;

  if (documents.length === 0) {
    return null;
  }

  return (
    <div className={styles.sidebar}>
      {documents.map((document, index) => (
        <div
          className={cx(
            {
              active: selectedDocumentID === document.id,
            },
            // eslint-disable-next-line
            'document'
          )}
          key={document.id}
        >
          <Button
            fullWidth
            isWrapper
            btnType={BTN_TYPES.button}
            onClick={() => selectDocument(document.id)}
          >
            <div>
              {index + 1}
              <Icon
                iconType={ICON_TYPES.document}
                className={styles.documentIcon}
              />
            </div>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
