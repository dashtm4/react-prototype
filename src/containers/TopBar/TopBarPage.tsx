import React, { useState } from 'react'
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { formatNumber } from '../../utils/helpers';
import { CURRENCY_TYPES } from '../../utils/constants';

import LangEN from '../../assets/images/lang-en.png';
import LangIE from '../../assets/images/lang-ie.png';
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
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState('en');
  const {
    balance,
    nextPayout,
    currency,
  } = status;

  const handleSwitchLang = (selectedLang: string) => () => {
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div className={clsx(wrapperStyle, "top-bar--wrapper")}>
      <div className="top-bar--status">
        <div className="top-bar--status-left">
          <div className="top-bar--status-item">
            <div className="label">{t('Balance')}</div>
            <div className="price">{formatNumber(balance)} {CURRENCY_TYPES[(currency as keyof {})]}</div>
          </div>
          <div className="top-bar--status-item">
            <div className="label">{t('Payout')}</div>
            <div className="price">{formatNumber(nextPayout)} {CURRENCY_TYPES[currency as keyof {}]}</div>
          </div>
        </div>

        <div className="top-bar--status-right">
          <div onClick={handleSwitchLang('en')}>
            <img
              src={LangEN}
              className={lang === 'en' ? 'active' : ''}
              alt="lang-en"
            />
          </div>
          <div onClick={handleSwitchLang('ie')}>
            <img
              src={LangIE}
              className={lang === 'ie' ? 'active' : ''}
              alt="lang-en"
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default TopBarPage;
