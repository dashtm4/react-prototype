import React, { createRef, RefObject } from 'react'
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
  onChildrenClick?: (ref: RefObject<HTMLInputElement>) => void;
}

function BaseInput({
  className: wrapperStyle,
  children,
  placeholder,
  value,
  onChange,
  onChildrenClick,
}: IProps) {
  const inputRef = createRef<HTMLInputElement>();

  const handleChange = (event: any) => {
    const updatedValue: string = event.target.value;
    if(onChange) onChange(updatedValue);
  };

  const handleChildrenClick = () => {
    if (onChildrenClick) {
      onChildrenClick(inputRef);
    }
  };

  return (
    <div className={wrapperStyle}>
      <input
        type="text"
        className={clsx("base-input--wrapper")}
        placeholder={placeholder}
        value={value}
        ref={inputRef}
        onChange={handleChange}
      />
      <div onClick={handleChildrenClick}>
        {children}
      </div>
    </div>
  )
};

export default BaseInput;
