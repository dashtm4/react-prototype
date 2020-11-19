import React, { useState, RefObject } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'react-tippy';

import BaseCard from '../BaseCard';
import FormInput from '../FormInput';
import BaseButton from '../BaseButton';
import Clipboard from '../Clipboard';

import 'react-tippy/dist/tippy.css';
import './ServiceItem.scss';

interface IProps {
  className?: string;
  name: string;
  description: string;
  promoCode: string;
  link: string;
  activated?: boolean;
  onActivate: (
    link: string,
    promoCode: string,
  ) => void;
}

function ServiceItem({
  className: wrapperStyle,
  name,
  description,
  link,
  activated,
  promoCode,
  onActivate,
}: IProps) {
  const { t } = useTranslation();
  const [showToolTip, setShowToolTip] = useState(false);
  const handlePrependClick = (ref: RefObject<HTMLInputElement>) => {
    ref?.current?.select();
    document.execCommand('copy');
    setShowToolTip(true);
    setTimeout(() => setShowToolTip(false), 500);
  };

  const handleActivate = () => {
    onActivate(link, promoCode);
  };

  return (
    <BaseCard className={clsx(wrapperStyle, "service-item--wrapper")}>
      <div>
        <div className="name">
          {name}
        </div>
        <div className="description">
          {description}
        </div>
      </div>
      <div className="service-item--right">
        {showToolTip}
        <Tooltip
          animation="perspective"
          distance={-16}
          duration={175}
          offset={-24}
          open={showToolTip}
          position="top-end"
          title={t('Copied!')}
          trigger="manual"
        >
          <FormInput
            className="service-item--form-input"
            label={t('Promocode')}
            value={promoCode}
            onChildrenClick={handlePrependClick}
          >
            <Clipboard className="input--append"/>
          </FormInput>
        </Tooltip>
        <BaseButton
          className="activate--button"
          label={activated ? t('Activated') : t('Activate bonus')}
          disabled={activated}
          onClick={handleActivate}
        />
      </div>
    </BaseCard>
  )
};

export default ServiceItem;
