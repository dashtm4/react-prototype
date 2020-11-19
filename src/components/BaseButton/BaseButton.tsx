import React from 'react'
import clsx from 'clsx';

import { TVariant } from './types';
import './BaseButton.scss';

interface IProps {
  className?: string,
  label: string,
  variant?: TVariant,
  disabled?: boolean,
  onClick?: () => void,
}

function BaseButton({
  className: wrapperStyle,
  label,
  variant = 'contained',
  disabled,
  onClick,
}: IProps) {
  return (
    <button
      className={clsx(wrapperStyle, "base-button--wrapper", variant)}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )
};

export default BaseButton;
