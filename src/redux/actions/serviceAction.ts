const serviceActionTypes = {
  FETCH_SERVICES: 'FETCH_SERVICES',
  FETCH_SERVICES_SUCCEED: 'FETCH_SERVICES_SUCCEED',
};

const fetchServices = () => ({
  type: serviceActionTypes.FETCH_SERVICES,
});

export {
  fetchServices,
};

export default serviceActionTypes;
