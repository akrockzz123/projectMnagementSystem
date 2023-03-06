




import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';

//import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL } from '../constants';

import { courseActionType, userActionType } from '../state/action-types';

//import { userLoginRequest,userLoginSuccess } from '../action/userLoginAction';

//import { userLoginSuccessAction } from '../state/action-creators';

import axios from 'axios';
import { Action } from '../state/action';

import { userLoginRequestAction } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';


const AssignCourseToUser  = async (course_name: string,userAssignId: string) => {


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




function* workcourseSaga(action: Action) : any{

    //yield takeEvery


    try {

        //action.payload.email
        const result = yield call(AssignCourseToUser,action.payload.course_name,action.payload.userAssignId);


        yield put(userLoginSuccessAction())

    

    }
    catch(err) {

        yield put(userLoginFailAction())
    }
}
 function* watchcourseSaga():any {

    yield takeEvery(courseActionType.COURSE_ASSIGN_REQUEST,watchcourseSaga);

    //yield call(handleLoginAction);

}

export const courseSagas = watchcourseSaga;