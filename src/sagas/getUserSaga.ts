




import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';

//import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL } from '../constants';

import { userActionType } from '../state/action-types';

//import { userLoginRequest,userLoginSuccess } from '../action/userLoginAction';

//import { userLoginSuccessAction } from '../state/action-creators';

import axios from 'axios';
import { Action } from '../state/action';

import { userinfoSuccess, userLoginRequestAction } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';


const fetchUserinfo  = async (id : string) => {

    //console.log(email,password)

    try {
        
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // }

       // const username : string = email

        //const pass : string = password


        const { data } = await axios.get(`/user/${id}`)

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




function* workuserinfoSaga(action: Action) : any{

    //yield takeEvery

    console.log("worksaga working")

    try {

        //action.payload.email

        console.log(action.payload,action.payload.id)


        const result = yield call(fetchUserinfo,action.payload.id);

        console.log(result,"chekcing usernfo saga")

        // way of calling action from work saga
        
        yield put({type : userActionType.USER_INFO_SUCCESS, payload : result})
        

    

    }
    catch(err) {

        yield put({type : userActionType.USER_INFO_FAIL})
    }
}
 function* watchuserinfoSaga() {

    console.log("watch saga")
    yield takeEvery(userActionType.USER_INFO_REQUEST,workuserinfoSaga);

    //yield call(handleLoginAction);

}

export const userinfoSagas = watchuserinfoSaga;
