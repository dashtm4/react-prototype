import React from 'react'
import clsx from 'clsx';

import './BaseCard.scss';

interface IProps {
  className?: string;
  children?: any;
}

function BaseCard({
  className: wrapperStyle,
  children,
}: IProps) {
  return (
    <div className={clsx(wrapperStyle, "base-card--wrapper")}>
      {children}
    </div>
  )
};

export default BaseCard;
