import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getServices } from '../../selectors';
import { fetchServices } from '../../redux/actions';
import BaseButton from '../../components/BaseButton';
import FormInput from '../../components/FormInput';
import ServiceItem from '../../components/ServiceItem';

import './Services.scss';

type TProps =
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

function Services({
  services,
  fetchServices,
}: TProps) {
  useEffect(() => {
    fetchServices();
  }, []);

  const handleReset = () => {
    console.log('reset');
    console.log(services);
  };

  return (
    <section className="services--wrapper">
      <div className="title">
        Services
      </div>
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


const mapStateToProps = (state: any) => ({
  services: getServices(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(
    {
      fetchServices,
    },
    dispatch,
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
