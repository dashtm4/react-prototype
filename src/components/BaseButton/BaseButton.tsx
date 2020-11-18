import React from 'react'
import clsx from 'clsx';

import { TVariant } from './types';
import './BaseButton.scss';

interface IProps {
  className?: string,
  label: string,
  variant?: TVariant,
  onClick?: () => void,
}

function BaseButton({
  className: wrapperStyle,
  label,
  variant = 'contained',
  onClick,
}: IProps) {
  return (
    <button
      className={clsx(wrapperStyle, "base-button--wrapper", variant)}
      onClick={onClick}
    >
      {label}
    </button>
  )
};

export default BaseButton;
