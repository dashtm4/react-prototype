import { call, put, takeEvery } from 'redux-saga/effects'
import actionTypes from '../actions'
import { fetchServices } from '../../service/services';

function * fetchServicesSaga () {
  try {
    const { data: payload } = yield call(fetchServices);
    yield put({
      type: actionTypes.FETCH_SERVICES_SUCCEED,
      payload,
    });
  } catch (error) {
    console.log('> error: ', error);
  }
}

function * fetchServicesWatcher () {
  yield takeEvery(actionTypes.FETCH_SERVICES, fetchServicesSaga);
}

function * activatePromoCodeSaga ({ payload }: any) {
  const { link, promoCode } = payload;
  try {
    yield put({
      type: actionTypes.ACTIVATE_PROMOCODE_SUCCEED,
      payload: {
        message: 'SUCCESS',
        link,
        promoCode,
      },
    });
  } catch (error) {
    console.log('> error: ', error);
  }
}

function * activatePromoCodeWatcher () {
  yield takeEvery(actionTypes.ACTIVATE_PROMOCODE, activatePromoCodeSaga);
}

export {
  fetchServicesWatcher,
  activatePromoCodeWatcher,
};
