import React, { RefObject } from 'react';
import clsx from 'clsx';

import BaseCard from '../BaseCard';
import FormInput from '../FormInput';
import BaseButton from '../BaseButton';
import Clipboard from '../Clipboard';

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
  const handlePrependClick = (ref: RefObject<HTMLInputElement>) => {
    ref?.current?.select();
    document.execCommand('copy');
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
        <FormInput
          className="service-item--form-input"
          label="Promocode"
          value={promoCode}
          onChildrenClick={handlePrependClick}
        >
          <Clipboard className="input--append"/>
        </FormInput>
        <BaseButton
          className="activate--button"
          label={activated ? 'Activated' : 'Active bonus'}
          disabled={activated}
          onClick={handleActivate}
        />
      </div>
    </BaseCard>
  )
};

export default ServiceItem;
