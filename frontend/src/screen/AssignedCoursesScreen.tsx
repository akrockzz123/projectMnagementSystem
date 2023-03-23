
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


