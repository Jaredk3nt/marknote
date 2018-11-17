import { useState } from 'react';

function useLocalStorage(key) {
  const initialValue = localStorage.getItem(key) || '[]';
  const [item, setValue] = useState(initialValue);
  const setItem = (item) => {
    setValue(JSON.stringify(item));
    localStorage.setItem(key, JSON.stringify(item));
  }
  return [JSON.parse(item), setItem];
}

export default useLocalStorage;