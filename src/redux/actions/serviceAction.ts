const serviceActionTypes = {
  FETCH_SERVICES: 'FETCH_SERVICES',
};

const fetchServices = (payload: any) => ({
  type: serviceActionTypes.FETCH_SERVICES,
  payload,
});

export {
  fetchServices,
};

export default serviceActionTypes;
