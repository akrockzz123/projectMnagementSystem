
import * as React from 'react';
import { useEffect } from 'react';
import { Alert, Button, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Loading from '../component/Loading';
import { alertset, AssignProjectRequest, getProjectsOfUserRequestAction, NotActiveProjectRequest } from '../state/action-creators';
import { useAppSelector } from '../Types';

import { useParams } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { Alertshow } from '../component/AlertShow';






type cvb = {

  project_id: any,
  name: string,
  assignee_id: string,
  status: string,
  Users: any
}
type courseStates = {

  course_id: string,

  course_name: string,

  success: boolean,

  error: any,


  loading: boolean,

  course_id_to_delete: string,

  course_id_to_delete_loading: boolean,

  course_id_to_delete_success: boolean,

  course_id_to_delete_error: boolean,

  success_delete_from_user: boolean,

  user_id_from_to_delete: string,

  loading_delete_from_user: boolean,


  error_delete_from_user: {},

  course_not_assign: [cvb],

  course_not_assign_loading: boolean,

  course_not_assign_success: boolean,

  course_not_assign_error: {}
}


interface IAppProps {
}

const ProjectsOfUser: React.FunctionComponent<IAppProps> = (props) => {


  const AssignHandler2 = (userid: any, project_id: string, navigate: any, dispatch: any, e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault()

    dispatch(AssignProjectRequest(userid, project_id))

    dispatch(NotActiveProjectRequest())

  }

  const navigate = useNavigate()

  

  const dispatch = useDispatch()

  useEffect(() => {

    const itemSet = (localStorage.getItem('userdata'));
    console.log(itemSet)
    if (!itemSet) {
      console.log('here')
      navigate('/navigate')
    }
  }, [])



  useEffect(() => {

    const userdatas : any = localStorage.getItem('userdata')

    const datas = JSON.parse(userdatas)

    const {userId} = datas
    
    dispatch(getProjectsOfUserRequestAction(userId))
    
    dispatch(NotActiveProjectRequest())

   

 
  }, [])


  const userids = useParams()

  const ids = userids.id

  //const notassigned: courseStates = useAppSelector(state => state.courseNotAssignReducer)

  const { course_not_assign, course_not_assign_loading, course_not_assign_success, course_not_assign_error } = useAppSelector(state => state.courseReducer)

  const { loadingAssign, successAssign, errorAssign } = useAppSelector(state => state.courseReducer)

  const {loadingUserCourse ,successCourse,errorCourse,userCourses} = useAppSelector((state : any) => {
      
    return state.getUserAssignedCourseReducer
  })

  const arr = { "msgtype": "success", "msg": "Course assigned" }

  const arr2 = { "msgtype": "danger", "msg": "Course not assigned" }

  console.log(userCourses,loadingUserCourse,successCourse)

  return (
    <div>
   
    {successAssign && <Alertshow arrs={arr}/> },
     
    {errorAssign && <Alertshow arrs={arr2} />}, 
    <h1 className="text-white bg-dark text-center mb-3 "> Assign Projects</h1>
    {course_not_assign_loading ? (
      <Loading />
    ) : course_not_assign_error ? (
      <h1>Error</h1>
    ) : (
      <table className="table table-info table-striped">
        <thead>
          <tr>
            <th>project_id</th>
            <th> Name</th>
            <th>Assignee</th>
            <th>Assign Project</th>
          </tr>
        </thead>
        <tbody>
          {course_not_assign.map((u:any) =>{ 
            
            var found = 0

            userCourses.map((u1 : any) => {

              console.log(u.project_id,u1.Project_id)
              if(u1.Project_id == u.project_id) {


                 found = 1;
              }

            })
            
            console.log(u.project_id,found)
            if(found == 0) {


            
            return (
            <tr>
              <td>{u.project_id}</td>
              <td>{u.name}</td>
              <td>{u.assignee_id}</td>

              <td>
                <button
                 className="btn btn-success"
                  onClick={(event) =>
                    AssignHandler2(
                      ids,
                      u.project_id,
                      navigate,
                      dispatch,
                      event
                    )
                  }
                >
                  Assign
                </button>{" "}
              </td>
            </tr>
          )}})}
        </tbody>
      </table>
    )}
  </div>

  );
};

export default ProjectsOfUser;
