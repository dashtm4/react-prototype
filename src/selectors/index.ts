// import { createSelector } from 'reselect'

const getServices = (state: any) => state.service.services;

const getStatus = (state: any) => state.service.status;

export {
  getServices,
  getStatus,
};
