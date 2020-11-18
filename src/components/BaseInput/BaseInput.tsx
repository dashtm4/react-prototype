import React from 'react'
import clsx from 'clsx';

import './BaseInput.scss';

interface IProps {
  className?: string;
  children?: any;
  placeholder?: string;
  value?: string;
}

function BaseInput({
  className: wrapperStyle,
  children,
  placeholder,
  value,
}: IProps) {
  return (
    <div className={wrapperStyle}>
      <input
        type="text"
        className={clsx("base-input--wrapper")}
        placeholder={placeholder}
        defaultValue={value}
      />
      {children}
    </div>
  )
};

export default BaseInput;
