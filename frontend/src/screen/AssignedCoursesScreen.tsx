
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../component/Loading'
import { getProjectsOfUserRequestAction } from '../state/action-creators'
import { useAppSelector } from '../Types'

import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
type Props = {}

const AssignedCoursesScreen = (props: Props) => {

    const navigate = useNavigate()
    
    const navigateHandler = () => {

        navigate('/navigate')
      }
    
    const { id }     = useParams()

    const {loadingUserCourse ,successCourse,errorCourse,userCourses} = useAppSelector(state => state.getUserAssignedCourseReducer)

    const dispatch = useDispatch()
    
    useEffect(() => {

        dispatch(getProjectsOfUserRequestAction(id))
        
    },[])
  return (
    <div>
    <>
    <h1 className="text-white bg-dark text-center mb-3"> Assigned Projects</h1>
  {loadingUserCourse ? (
    <Loading />
  ) : (
    <table className="table table-info table-striped">
      <thead>
        <tr>
          <th>Project ID</th>
          <th>Project Name</th>
          <th>Assigneed ID</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {userCourses.map((item: any, index: any) => (
          <tr key={index}>
            <td>{item.project_id}</td>
            <td>{item.name}</td>
            <td>{item.assignee_id}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}

{<button className="btn btn-success" onClick = {navigateHandler}>Go back</button>}
</>
</div>
  )
}

export default AssignedCoursesScreen














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





// function* workdeleteCourseSaga(action: Action) : any{

//     //yield takeEvery

//     console.log("delete user saga working",action.payload)

//     try {
//           // making an api call to delete the user
//         yield call(deleteCourse,action.payload);

//         // console.log(result)

//         // dispatching a success action with the deleted user id
        
//         yield put({type : courseActionType.COURSE_DELETE_SUCCESS})
//     }
//     catch(err) {
//         // dispatching a failure action with the error message
//         yield put({type : courseActionType.COURSE_DELETE_FAIL})
//     }
// }
//  function* watchcourseDeleteSaga() {

//     console.log("watch delete COURSE saga")
//     yield takeEvery(courseActionType.COURSE_DELETE_REQUEST,workdeleteCourseSaga);

    

// }

// export const courseDeleteSaga = watchcourseDeleteSaga



