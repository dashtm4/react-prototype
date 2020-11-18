import React from 'react'
import clsx from 'clsx';

import './BaseButton.scss';

interface IProps {
  className?: string,
  label: string,
  onClick?: () => void,
}

function BaseButton({
  className: wrapperStyle,
  label,
  onClick,
}: IProps) {
  return (
    <button
      className={clsx(wrapperStyle, "base-button--wrapper")}
      onClick={onClick}
    >
      {label}
    </button>
  )
};

export default BaseButton;
