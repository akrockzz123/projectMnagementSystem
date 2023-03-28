




import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getProjectsOfUserRequestAction } from '../state/action-creators';
import { useAppSelector } from '../Types';
import { useEffect } from 'react';
import Loading from '../component/Loading';



interface IAppProps {
}

type allcourses = {

}
const UserCoursAssignedScreen: React.FunctionComponent<IAppProps> = (props) => {

    const dispatch = useDispatch();

    const {loadingUserCourse ,successCourse,errorCourse,userCourses} = useAppSelector((state : any) => {
      
      return state.getUserAssignedCourseReducer
    })
    
    useEffect(() => {

        const userdatas : any = localStorage.getItem('userdata')

        const datas = JSON.parse(userdatas)

        const {userId} = datas
        
        dispatch(getProjectsOfUserRequestAction(userId))
    },[])

    // "project_id": 2,
    // "name": "p2",
    // "assignee_id": 1,
    // "status": "Inactive",
    // "Users": null

    const navigate = useNavigate()


    const navigateHandler = () => {

      navigate('/navigate')
    }
  
return (
  <div style = {{marginTop : '100px'}}>
  
  
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
                <td>{item.Project_id}</td>
                <td>{item.Project_name}</td>
                <td>{item.assignee_id}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    {<button className="btn btn-success" onClick = {navigateHandler}>Go back</button>}
  </div>
);
}

export default UserCoursAssignedScreen;


