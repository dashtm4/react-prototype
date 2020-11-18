import React from 'react';

import BaseButton from '../../components/BaseButton';
import BaseInput from '../../components/BaseInput';
import ServiceItem from '../../components/ServiceItem';

import './Services.scss';

function Services() {
  const handleReset = () => {
    alert('reset');
  };

  return (
    <section className="services--wrapper">
      <div className="title">Services</div>
      <div>
        <BaseInput
          className="filter--input"
          placeholder="Filter services.."
        />
        <BaseButton
          className="reset--button"
          label="Reset"
          onClick={handleReset}
          variant="outlined"
        />
        <ServiceItem
          name="ServiceName"
          description="Description"
          promoCode="asdf"
        />
      </div>
    </section>
  )
};

export default Services;
