import { all } from 'redux-saga/effects';
import {
  fetchServicesWatcher,
  activatePromoCodeWatcher,
} from './serviceSaga'

export default function * rootSaga () {
  yield all([
    fetchServicesWatcher(),
    activatePromoCodeWatcher(),
  ]);
};
