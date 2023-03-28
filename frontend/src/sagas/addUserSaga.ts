






import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';

//import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL } from '../constants';

import { userActionType } from '../state/action-types';

//import { userLoginRequest,userLoginSuccess } from '../action/userLoginAction';

//import { userLoginSuccessAction } from '../state/action-creators';

import axios from 'axios';
import { Action } from '../state/action';

import { userLoginRequestAction, userSignupFailAction } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';
import { BASE_URL } from '../constant/environment';


const addUser  = async (username : string,email: string,password: string,role : string) => {

    console.log(email,password)

    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }

        const status : string = "Active"

        const { data } = await axios.post(`${BASE_URL}/user/add`,{username,email,role,status,password},config)

        return data

    } catch (err) {
        
        throw err
    }
    




}





function* workadduserSaga(action: Action) : any{

    //yield takeEvery

    console.log("work add user saga working")

    try {

        //action.payload.email
        const result = yield call(addUser,action.payload.username,action.payload.email,action.payload.password,action.payload.role);

        console.log(result)

        // way of calling action from work saga
        
       // yield put(userSignupSuccessAction)

       yield put({
                
        type: userActionType.USER_SIGNUP_SUCCESS
    })

   

   
    
    

    }
    catch(err) {

        yield put(userSignupFailAction)
    }
}
 function* watchadduserSaga() {

    console.log("watch add user saga")
    yield takeEvery(userActionType.USER_SIGNUP_REQUEST,workadduserSaga);

    //yield call(handleLoginAction);

}

export const AdduserSaga = watchadduserSaga;


