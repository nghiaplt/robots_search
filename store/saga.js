import { all, fork } from 'redux-saga/effects';
import robots from './robots/robots.saga';

export default function* mainSaga() {
  yield all([
    fork(robots),
  ]);
}
