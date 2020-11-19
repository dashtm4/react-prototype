import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getServices } from '../../selectors';
import { fetchServices } from '../../redux/actions';
import ServicesPage from './ServicesPage';

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

  return (
    <ServicesPage
      services={services}
    />
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
