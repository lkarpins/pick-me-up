import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: []) {
  // getting stored value
  const saved = localStorage.getItem(key)!;
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: []) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing favorite selection
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

/* NOTE: reference article - https://blog.logrocket.com/using-localstorage-react-hooks/*/
