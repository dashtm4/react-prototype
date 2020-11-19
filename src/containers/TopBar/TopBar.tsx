import React from 'react'
import { connect, ConnectedProps } from 'react-redux';
import clsx from 'clsx';

import { getStatus } from '../../selectors';
import { formatNumber } from '../../utils/helpers';
import { CURRENCY_TYPES } from '../../utils/constants';

import './TopBar.scss';

interface IProps {
  className?: string;
}

type TProps =
  & ConnectedProps<typeof connector>
  & IProps;

function TopBar({
  className: wrapperStyle,
  status,
}: TProps) {
  const {
    balance,
    nextPayout,
    currency,
  } = status;

  return (
    <div className={clsx(wrapperStyle, "top-bar--wrapper")}>
      <div className="top-bar--status">
        <div className="top-bar--status-item">
          <div className="label">Balance</div>
          <div className="price">{formatNumber(balance)} {CURRENCY_TYPES[currency]}</div>
        </div>

        <div className="top-bar--status-item">
          <div className="label">Payout</div>
          <div className="price">{formatNumber(nextPayout)} {CURRENCY_TYPES[currency]}</div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state: any) => ({
  status: getStatus(state),
});

const connector = connect(mapStateToProps, null);

export default connector(TopBar);
