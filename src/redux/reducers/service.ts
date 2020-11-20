import actionTypes from '@/redux/actions';

interface IService {
  title: string;
  description: string;
  link: string;
  promocode: string;
}

interface IStatus {
  balance: number;
  nextPayout: number;
  currency: string;
  activated?: boolean;
}

interface IState {
  services: IService[];
  status: IStatus;
}

const initialState: IState = {
  services: [],
  status: {
    balance: 0,
    nextPayout: 0,
    currency: 'USD',
  }
};

const service = (
  state: IState = initialState,
  action: any,
) => {
  switch (action.type) {
    case actionTypes.FETCH_SERVICES_SUCCEED:
      const {
        payload: {
          bonuses: services,
          header: status,
        },
      } = action;
      const {
        services: initialServices,
        status: initialStatus,
      } = initialState;

      return {
        services: services || initialServices,
        status: {
          balance: status?.balance || initialStatus.balance,
          nextPayout: status?.next_payout || initialStatus.nextPayout,
          currency: status?.currency.toUpperCase() || initialStatus.currency,
        }
      };
    case actionTypes.ACTIVATE_PROMOCODE_SUCCEED:
      const { payload } = action;

      if (payload.message === 'SUCCESS') {
        return {
          ...state,
          services: state.services.map((service: IService) => ({
              ...service,
              activated: (
                service.link === payload.link &&
                service.promocode === payload.promoCode
              ) ? true : false,
          })),
        }
      }
      return state;
    default:
      return state;
  }
}

export default service;
