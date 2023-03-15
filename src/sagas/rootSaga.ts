import { all } from "redux-saga/effects";

import { userSagas } from "./userSaga";

import { courseSagas } from "./courseSaga";

import { userListsSagas } from "./usersListSaga";

import { fork } from "redux-saga/effects";

import { AdduserSaga } from "./addUserSaga";

import { coursenotassignedSaga } from "./courseNotAssign";

import { AddprojectSaga } from "./addProjectSaga";
import { updateAdminSaga } from "./updateAdminSaga";

import { userinfoSagas } from "./getUserSaga";
function* watchrootSaga() {}

const rootSaga = function* rootSaga() {
  const sagas = [userSagas, courseSagas];

  yield all([
    fork(userSagas),
    fork(courseSagas),
    fork(updateAdminSaga),
    fork(userListsSagas),
    fork(AdduserSaga),
    fork(coursenotassignedSaga),
    fork(AddprojectSaga),
    fork(userinfoSagas)
  ]);
};

export default rootSaga;
