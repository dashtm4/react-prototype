import React from 'react';

import BaseButton from '../../components/BaseButton';
import FormInput from '../../components/FormInput';
import ServiceItem from '../../components/ServiceItem';

import './Services.scss';

function Services() {
  const handleReset = () => {
    console.log('reset');
  };

  return (
    <section className="services--wrapper">
      <div className="title">Services</div>
      <div className="services--action">
        <FormInput
          className="services--form-input"
          label="Filter"
          placeholder="Filter services..."
          value="adsf"
        />
        <BaseButton
          className="reset--button"
          label="Reset"
          onClick={handleReset}
          variant="outlined"
        />
      </div>
      <ServiceItem
        className="services--item"
        name="Sitecostructor.io"
        description="Description"
        promoCode="itpromocodes"
      />
      <ServiceItem
        className="service-item"
        name="Sitecostructor.io"
        description="Description"
        promoCode="itpromocodes"
      />
    </section>
  )
};

export default Services;
