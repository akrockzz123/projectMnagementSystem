

import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';

//import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL } from '../constants';

import { userActionType } from '../state/action-types';

//import { userLoginRequest,userLoginSuccess } from '../action/userLoginAction';

//import { userLoginSuccessAction } from '../state/action-creators';

import axios from 'axios';
import { Action } from '../state/action';

import { userLoginRequestAction } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';


const fetchUser  = async (email: string,password: string) => {

    console.log(email,password)

    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
    
        //const { data } = await axios.post('/api/users/login',{email,password},config)

        return 'aniket'

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




function* workuserSaga(action: Action) : any{

    //yield takeEvery

    console.log("worksaga working")

    try {

        //action.payload.email
        const result = yield call(fetchUser,action.payload.email,action.payload.password);

        console.log(result)

        // way of calling action from work saga
        
        yield put(userLoginSuccessAction(result))

    

    }
    catch(err) {

        yield put(userLoginFailAction())
    }
}
 function* watchuserSaga() {

    console.log("watch saga")
    yield takeEvery(userActionType.USER_LOGIN_REQUEST,workuserSaga);

    //yield call(handleLoginAction);

}

export const userSagas = watchuserSaga;