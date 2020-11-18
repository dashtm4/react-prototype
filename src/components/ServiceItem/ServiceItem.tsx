import React from 'react';

import BaseCard from '../../components/BaseCard';

interface IProps {
  name: string;
  description: string;
  promoCode: string;
}

function ServiceItem({
  name,
  description,
  promoCode,
}: IProps) {
  return (
    <div>
      <BaseCard>
        <div>Hello</div>
      </BaseCard>
    </div>
  )
};

export default ServiceItem;
