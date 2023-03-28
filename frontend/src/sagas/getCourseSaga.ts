







import { takeEvery, take , select, call,put, fork} from  'redux-saga/effects';


import { courseActionType, userActionType } from '../state/action-types';

import axios from 'axios';

import { Action } from '../state/action';

import { userinfoSuccess, userLoginRequestAction } from '../state/action-creators';

import { userLoginFailAction } from '../state/action-creators';

import { userLoginSuccessAction } from '../state/action-creators';
import { BASE_URL } from '../constant/environment';


const fetchCourse  = async () => {

    try {

        console.log("hey 1234")
        const { data }  = await axios.get(`${BASE_URL}/project/all`)

        return data

    } catch (err) {
        
        throw err
    }
    




}

function* workgetCourseSaga(action: Action) : any{

    console.log("worksaga of course working")

    try {


        console.log("hey 12345678")

        //console.log(action.payload,action.payload.id)


        const result = yield call(fetchCourse);

        console.log(result)
        
        yield put({type : courseActionType.GET_PROJECT_SUCCESS, payload : result})
    
    }
    catch(err) {

        yield put({type : courseActionType.GET_PROJECT_FAIL})
    }
}
 function* watchgetCourseSaga() {

    console.log("get course saga heyy")
    yield takeEvery(courseActionType.GET_PROJECT_REQUEST,workgetCourseSaga);

}

export const getCourseSaga = watchgetCourseSaga;
