












import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';

//import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL } from '../constants';

import { userActionType } from '../state/action-types';

//import { userLoginRequest,userLoginSuccess } from '../action/userLoginAction';

//import { userLoginSuccessAction } from '../state/action-creators';

import axios from 'axios';
import { Action } from '../state/action';

import { userLoginRequestAction, userSignupFailAction, userUpdateAdminActionFail, userUpdateAdminActionSuccess } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';


const addUser  = async (id : string) => {

    //console.log(email,password)

    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
    
        const { data } = await axios.post(`/user/update/${id}`,config)

        return data

    } catch (err) {
        
        throw err
    }
    




}
/*function* handleLoginAction(action: Action) {
    try {

       const data = yield call(fetchUser);

        
    } catch(error) {

    }

}*/




function* workupdateadminSaga(action: Action) : any{

    //yield takeEvery

    console.log("work update admin saga working")

    try {

        //action.payload.email
        const result = yield call(addUser,action.payload.id);

        console.log(result)

        // way of calling action from work saga
        
        yield put({type : userActionType.USER_UPATE_ADMIN_SUCCESS})

    

    }
    catch(err) {

        yield put(userUpdateAdminActionFail)
    }
}
 function* watchupdateadminSaga() {

    console.log("watch add user saga")
    yield takeEvery(userActionType.USER_UPDATE_ADMIN_REQUEST,workupdateadminSaga);

    //yield call(handleLoginAction);

}

export const updateAdminSaga = watchupdateadminSaga