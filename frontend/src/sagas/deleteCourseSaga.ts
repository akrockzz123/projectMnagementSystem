











import { takeEvery, call,put} from  'redux-saga/effects';

import { courseActionType, userActionType } from '../state/action-types';



import axios from 'axios';
import { Action } from '../state/action';

import { userDeleteRequestAction, userDeleteSuccessAction,userDeleteFailAction } from '../state/action-creators';
import { createTry } from 'typescript';
import { config } from 'process';
import { BASE_URL } from '../constant/environment';


const deleteCourse  = async (id : string) => {


    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
    
        const { data } = await axios.post(`${BASE_URL}/project/remove/${id}`,config)

        return data

    } catch (err) {
        
        throw err
    }
    
}





function* workdeleteCourseSaga(action: Action) : any{

    //yield takeEvery

    console.log("delete course saga working")

    try {
          // making an api call to delete the user
        const result = yield call(deleteCourse,action.payload.course_id);

        console.log(result)

        // dispatching a success action with the deleted user id
        
        yield put({type : courseActionType.COURSE_DELETE_SUCCESS})
    }
    catch(err) {
        // dispatching a failure action with the error message
        yield put({type : courseActionType.COURSE_DELETE_FAIL})
    }
}
 function* watchcourseDeleteSaga() {

    console.log("watch delete user saga")
    yield takeEvery(courseActionType.COURSE_DELETE_REQUEST,workdeleteCourseSaga);

    

}

export const courseDeleteSaga = watchcourseDeleteSaga