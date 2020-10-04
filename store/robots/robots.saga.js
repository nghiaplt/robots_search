import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { types, actionCreators } from './robots.meta'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getRobots(action) {
   try {
      const res = yield fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = yield res.json()

      yield put(actionCreators.getRobotsSuccess(data));
   } catch (e) {
      yield put(actionCreators.getRobotsError(e));
   }
}

// /*
//   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
//   Allows concurrent fetches of user.
// */
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchRobots);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(
    types.GET_ROBOTS_REQUEST,
    getRobots
  );
}

export default mySaga;