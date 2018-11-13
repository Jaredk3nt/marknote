import { useState, useEffect } from 'react';

function useLocalStorage(key) {
  let localStorageItem;
  if (key) {
    localStorageItem = localStorage[key];
  }
  const [localState, updateLocalState] = useState(localStorageItem);
  function sync(event) {
    if (event.key === key) {
      updateLocalState(event.newValue);
    }
  }
  useEffect(() => {
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('storage', sync);
    };
  }, []);
  return JSON.parse(localState);
}

export default useLocalStorage;