import React from 'react'
import clsx from 'clsx';

import { formatNumber } from '../../utils/helpers';
import { CURRENCY_TYPES } from '../../utils/constants';

import './TopBar.scss';

interface IProps {
  className?: string;
}

function TopBar({
  className: wrapperStyle,
}: IProps) {
  return (
    <div className={clsx(wrapperStyle, "top-bar--wrapper")}>
      <div className="top-bar--status">
        <div className="top-bar--status-item">
          <div className="label">Balance</div>
          <div className="price">{formatNumber(213920)} {CURRENCY_TYPES['USD']}</div>
        </div>
        <div className="top-bar--status-item">
          <div className="label">Payout</div>
          <div className="price">{formatNumber(159465)} {CURRENCY_TYPES['USD']}</div>
        </div>
      </div>
    </div>
  )
};

export default TopBar;
