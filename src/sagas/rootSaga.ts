import { all } from 'redux-saga/effects';



import { userSagas } from './userSaga';

import { courseSagas } from './courseSaga';

import { userListsSagas } from './usersListSaga';

import { fork } from 'redux-saga/effects';

import { AdduserSaga } from './addUserSaga';

function* watchrootSaga() {


}

const rootSaga = function* rootSaga() {

  const sagas = [userSagas,courseSagas];

  yield all([fork(userSagas),fork(courseSagas), fork(userListsSagas),fork(AdduserSaga)]);
}

export default rootSaga
