import React, { RefObject } from 'react'
import clsx from 'clsx';

import BaseInput from '../BaseInput';

import './FormInput.scss';

interface IProps {
  className?: string;
  children?: any;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    value: string,
  ) => void;
  onChildrenClick?: (ref: RefObject<HTMLInputElement>) => void;
}

function FormInput({
  className: wrapperStyle,
  children,
  label,
  placeholder,
  value,
  onChange,
  onChildrenClick,
}: IProps) {
  return (
    <div className={clsx(wrapperStyle, "form-input--wrapper")}>
      <div className="label">{label}</div>
      <BaseInput
        className="form-input--element"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onChildrenClick={onChildrenClick}
      >
        {children}
      </BaseInput>
    </div>
  )
};

export default FormInput;
