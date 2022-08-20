import React, { useState, useEffect } from 'react';

// Constants
import { KEYWORD_EXCEPTIONS } from 'utils/constants';

// Utilities
import { v4 as uuidv4 } from 'uuid';
import { convertToArray, countEntries, sortByCount } from 'utils/calculations';

// Context
import SearchContext from './SearchContext';

const SearchState = ({ children }) => {
  const [searchContent, setSearchContent] = useState('');
  const [documents, setDocuments] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const [selectedDocumentID, setSelectedDocumentID] = useState(null);
  const [isModifying, setIsModifying] = useState(false);

  const addDocument = () => {
    // Turn the searchContent into a clean array
    const cleanWordArr = convertToArray(searchContent);

    console.log('clean Arr: ', cleanWordArr);

    // create a map of every word with its corresponding count
    const wordMap = countEntries(cleanWordArr, KEYWORD_EXCEPTIONS);
    console.log('wordMap: ', wordMap);

    // Sort the word map my the word count
    const sortedWordMap = sortByCount(wordMap);
    console.log('sortedWordMap: ', sortedWordMap);

    const newDocument = {
      id: uuidv4(),
      content: searchContent,
    };

    setDocuments([...documents, newDocument]);

    setSearchContent('');
  };

  const removeDocument = (id) => {
    console.log('Item Removed');
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
    const modifiedDocument = documents.find(
      // eslint-disable-next-line
      (document) => document.id === selectedDocumentID
    );

    modifiedDocument.content = searchContent;

    const modifiedList = documents.map((document) => {
      if (document.id === modifiedDocument.id) {
        console.log('MATCH!!! RETURNING selectedDocument');
        return modifiedDocument;
      }

      return document;
    });

    setDocuments(modifiedList);
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
