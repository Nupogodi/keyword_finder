import React, { useState, useEffect } from 'react';

// Utilities
import { v4 as uuidv4 } from 'uuid';
import { generateKeywordMap } from 'utils/calculations';

// Context
import SearchContext from './SearchContext';

const SearchState = ({ children }) => {
  const [searchContent, setSearchContent] = useState('');
  const [documents, setDocuments] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [selectedDocumentID, setSelectedDocumentID] = useState(null);
  const [isModifying, setIsModifying] = useState(false);

  useEffect(() => {
    if (documents.length === 0) return;

    const consolidateDocuments = () => {
      const consolidatedStr = documents
        .map((document) => document.content)
        .join(' ');

      const keywordMap = generateKeywordMap(consolidatedStr);

      setSearchResult(keywordMap);
    };

    consolidateDocuments();
  }, [documents]);

  const addDocument = () => {
    if (searchContent === '') {
      return;
    }
    const newDocument = {
      id: uuidv4(),
      content: searchContent,
    };

    setDocuments([...documents, newDocument]);

    setSearchContent('');
  };

  const selectDocument = (id) => {
    const match = documents.find((document) => document.id === id);

    setSelectedDocumentID(match.id);
    setSearchContent(match.content);
    setIsModifying(true);
  };

  const deselectDocument = () => {
    setSelectedDocumentID(null);
    setSearchContent('');
    setIsModifying(false);
  };

  // Modify Document Function
  const modifyDocument = () => {
    const modifiedList = documents.map((document) => {
      if (document.id === selectedDocumentID) {
        return {
          ...document,
          content: searchContent,
          keywordMap: generateKeywordMap(searchContent),
        };
      }

      return document;
    });

    setDocuments(modifiedList);
    deselectDocument();
  };

  const removeDocument = () => {
    const filteredList = documents.filter(
      // eslint-disable-next-line
      (document) => document.id !== selectedDocumentID
    );

    setDocuments(filteredList);
    deselectDocument();
  };

  return (
    <SearchContext.Provider
      // eslint-disable-next-line
      value={{
        searchContent,
        setSearchContent,
        documents,
        setDocuments,
        searchResult,
        selectedDocumentID,
        setSelectedDocumentID,
        isModifying,
        setIsModifying,
        addDocument,
        removeDocument,
        selectDocument,
        deselectDocument,
        modifyDocument,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
