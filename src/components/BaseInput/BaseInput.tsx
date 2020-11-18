import React from 'react'
import clsx from 'clsx';

import './BaseInput.scss';

interface IProps {
  className?: string,
  placeholder?: string,
}

function BaseInput({
  className: wrapperStyle,
  placeholder,
}: IProps) {
  return (
    <input
      type="text"
      className={clsx(wrapperStyle, "base-input--wrapper")}
      placeholder={placeholder}
    />
  )
};

export default BaseInput;
