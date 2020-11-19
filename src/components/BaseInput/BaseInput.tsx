import React from 'react'
import clsx from 'clsx';

import './BaseInput.scss';

interface IProps {
  className?: string;
  children?: any;
  placeholder?: string;
  value?: string;
  onChange?: (
    value: string,
  ) => void;
}

function BaseInput({
  className: wrapperStyle,
  children,
  placeholder,
  value,
  onChange,
}: IProps) {
  const handleChange = (event: any) => {
    const updatedValue: string = event.target.value;
    if(onChange) onChange(updatedValue);
  };

  return (
    <div className={wrapperStyle}>
      <input
        type="text"
        className={clsx("base-input--wrapper")}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {children}
    </div>
  )
};

export default BaseInput;
