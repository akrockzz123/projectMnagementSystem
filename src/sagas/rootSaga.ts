import { all } from 'redux-saga/effects';



import { userSagas } from './userSaga';

import { courseSagas } from './courseSaga';

import { fork } from 'redux-saga/effects';
function* watchrootSaga() {


}

const rootSaga = function* rootSaga() {

  const sagas = [userSagas,courseSagas];

  yield all([fork(userSagas),fork(courseSagas)]);
}

export default rootSaga
