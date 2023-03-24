












import { takeEvery, call,put} from  'redux-saga/effects';

import { courseActionType, userActionType } from '../state/action-types';



import axios from 'axios';
import { Action } from '../state/action';

import { userDeleteRequestAction, userDeleteSuccessAction,userDeleteFailAction } from '../state/action-creators';
import { createTry } from 'typescript';
import { config } from 'process';


const deleteCourse  = async (id : string) => {


    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const ids = JSON.parse(id)
        const { data } = await axios.post(`/project/remove/${ids}`,config)

        //return data

    } catch (err) {
        
        throw err
    }
    
}





function* workdeleteCourseSaga(action: Action) : any{

    //yield takeEvery

    console.log("delete user saga working",action.payload)

    try {
          // making an api call to delete the user
        yield call(deleteCourse,action.payload);

        // console.log(result)

        // dispatching a success action with the deleted user id
        
        yield put({type : courseActionType.COURSE_DELETE_SUCCESS})
    }
    catch(err) {
        // dispatching a failure action with the error message
        yield put({type : courseActionType.COURSE_DELETE_FAIL})
    }
}
 function* watchcourseDeleteSaga() {

    console.log("watch delete COURSE saga")
    yield takeEvery(courseActionType.COURSE_DELETE_REQUEST,workdeleteCourseSaga);

    

}

export const courseDeleteSaga = watchcourseDeleteSaga
