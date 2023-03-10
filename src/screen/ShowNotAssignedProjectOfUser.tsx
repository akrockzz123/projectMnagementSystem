

import * as React from 'react';
import { Button, Table } from 'react-bootstrap';
import Loading from '../component/Loading';
import { useAppSelector } from '../Types';


/*error_delete_from_user: {},

    course_not_assign : [],

    course_not_assign_loading : boolean,

    course_not_assign_success : boolean,

    course_not_assign_error : {}

    */

    type course  = {

      course_not_assigns : [],

      course_not_assign_loadings : boolean,

      course_not_assign_successs : boolean,

      course_not_assign_errors : boolean
    }

    const AssignHandler = (project_id : string,navigate : any) => {

      
    }

interface IAppProps {
}

const ProjectsOfUser: React.FunctionComponent<IAppProps> = (props) => {

  const {course_not_assign ,course_not_assign_loading ,course_not_assign_success,course_not_assign_error} = useAppSelector(state => state.courseReducer)
    console.log("ahow project")
  return (
   <div>
     {course_not_assign_loading ? <Loading/> : course_not_assign_error ? <h1>Error</h1> : (

<Table  striped bordered hover responsive className='table-sm'>
<thead>
  <tr>
    
    <th>project_id</th>
    <th> Name</th>
    <th>Assignee</th>
    
    <th>Assign Project</th>
  </tr>
</thead>
<tbody>
  
    {course_not_assign.map(u => 
      <tr key = {u.project_id}>
        <td>{u.project_id}</td>
        <td>{u.name}</td>
        <td>{u.assignee_id}</td>
        
        <td ><Button variant='primary' onClick = { () => AssignHandler(u.project_id,navigate)}>Assign</Button> </td>
      </tr>
    )}
  
 
  
</tbody>
</Table>
     )}
   </div>
       
    
  ) ;
};

export default ProjectsOfUser;
