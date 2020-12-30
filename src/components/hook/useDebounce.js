import React, { useState, useEffect } from "react";

const useDebounce = (value, timeout) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, timeout]);
  return debouncedValue;
};
export default useDebounce;
