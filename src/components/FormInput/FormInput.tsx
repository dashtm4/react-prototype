import React from 'react'
import clsx from 'clsx';

import BaseInput from '../BaseInput';

import './FormInput.scss';

interface IProps {
  className?: string;
  children?: any;
  label: string;
  placeholder?: string;
  value?: string;
}

function FormInput({
  className: wrapperStyle,
  children,
  label,
  placeholder,
  value,
}: IProps) {
  return (
    <div className={clsx(wrapperStyle, "form-input--wrapper")}>
      <div className="label">{label}</div>
      <BaseInput
        className="form-input--element"
        placeholder={placeholder}
        value={value}
      >
        {children}
      </BaseInput>
    </div>
  )
};

export default FormInput;