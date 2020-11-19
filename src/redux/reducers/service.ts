import actionTypes from '../actions';

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
      const newState = {
        services: services || initialServices,
        status: {
          balance: status?.balance || initialStatus.balance,
          nextPayout: status?.next_payout || initialStatus.nextPayout,
          currency: status?.currency || initialStatus.currency,
        }
      };
      return newState;
    default:
      return state;
  }
}

export default service;
