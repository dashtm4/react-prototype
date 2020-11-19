import React from 'react'
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { formatNumber } from '../../utils/helpers';
import { CURRENCY_TYPES } from '../../utils/constants';

import './TopBar.scss';

interface IStatus {
  balance: number;
  nextPayout: number;
  currency: string;
};

interface IProps {
  className?: string;
  status: IStatus;
};

function TopBarPage({
  className: wrapperStyle,
  status,
}: IProps) {
  const { t } = useTranslation();

  const {
    balance,
    nextPayout,
    currency,
  } = status;

  return (
    <div className={clsx(wrapperStyle, "top-bar--wrapper")}>
      <div className="top-bar--status">
        <div className="top-bar--status-item">
          <div className="label">{t('Balance')}</div>
          <div className="price">{formatNumber(balance)} {CURRENCY_TYPES[(currency as keyof {})]}</div>
        </div>

        <div className="top-bar--status-item">
          <div className="label">{t('Payout')}</div>
          <div className="price">{formatNumber(nextPayout)} {CURRENCY_TYPES[currency as keyof {}]}</div>
        </div>
      </div>
    </div>
  )
};

export default TopBarPage;
