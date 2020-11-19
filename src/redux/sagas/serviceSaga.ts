import { call, put, takeEvery } from 'redux-saga/effects'
import actionTypes from '../actions'
import { fetchServices } from '../../service/services';

function * fetchServicesSaga (payload: any) {
  try {
    const res = yield call(fetchServices);
    console.log('> res', res);

    yield put({
      type: actionTypes.FETCH_SERVICES,
      response: res.data
    });
  } catch (error) {
    console.log('> error: ', error);
  }
}

function * fetchServicesWatcher () {
  yield takeEvery(actionTypes.FETCH_SERVICES, fetchServicesSaga);
}

export {
  fetchServicesWatcher,
};
