import React from 'react';

import BaseButton from '../../components/BaseButton';
import BaseInput from '../../components/BaseInput';

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
      </div>
    </section>
  )
};

export default Services;
