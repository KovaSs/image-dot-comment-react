import React, { useState } from 'react';

export const InputSearch = ({
  autoFocus = false,
  defaultValue = '',
  placeholder = '',
  clearOnSearch,
  onChange,
  onSearch,
  style,
}) => {
  const [value, setValue] = useState(defaultValue);

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (value && value.length > 0 && onSearch) {
        onSearch(value);
        if (clearOnSearch) setValue('');
      } else {
        alert('Please type something');
      }
    }
  };

  const onHandleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setValue(value);
    if (onChange) onChange(value);
  };

  return (
    <input
      placeholder={placeholder}
      className="simpleInput"
      onKeyPress={onKeyPress}
      autoFocus={autoFocus}
      onChange={onHandleChange}
      style={style}
      value={value}
    />
  );
}
