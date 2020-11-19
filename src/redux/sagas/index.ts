import { all } from 'redux-saga/effects';
import { fetchServicesWatcher } from './serviceSaga'

export default function * rootSaga () {
  yield all([
    fetchServicesWatcher(),
  ]);
};
