




import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AssignProjectRequest, courseAddRequestAction, getProjectsRequest, UsersListRequestAction } from '../state/action-creators';
//import { courseAddReducer } from '../state/reducers/courseAddReducer';
import { useAppSelector } from '../Types';

import { alertset } from '../state/action-creators';
import { Alertshow } from '../component/AlertShow';
import { courseActionType, userActionType } from '../state/action-types';
import { coursenotassignedSaga } from '../sagas/courseNotAssign';

interface IAppProps {
}

// Name        string `json:"name"`
// 	Assignee_id string `json:"assignee_id"`
// 	Status      string `json:"status"`

const DeleteProjectScreen: React.FunctionComponent<IAppProps> = (props) => {



    const [courseid, setCourseid] = useState('')

    const [dis, setDis] = useState(false)

    const dispatch = useDispatch()

    const refInput: any = useRef(" ")

    //const alertData   = useAppSelector(state => state.user)

    //     usersList(pin):
    // usersLoading(pin):true
    // successUsers(pin):false
    // errorusers(pin):false

    const { course_id_to_delete_loading, course_id_to_delete_success, course_id_to_delete_error } = useAppSelector((state: any) => {

        return state.courseReducer
    })
        ;
    const { get_project_loading, get_project_success, get_project_error, get_projects } = useAppSelector((state: any) => {
        return state.courseReducer
    })



    useEffect(() => {

        dispatch(getProjectsRequest())
    }, [])


    const assigneeFunc: any = (assign: string) => {

        console.log(refInput, "aniket")


        setDis(true)
        setCourseid(assign)
    }

    const notassigneeFunc: any = () => {

        //setDis(false)
    }

    const deselectAssigneeId: any = () => {

        setDis(false)
    }
    const submitHandlerFunc: any = (e : any) => {

        e.preventDefault()
           console.log(refInput.current.value,"heyyyyyy")
        //     dispatch(courseAddRequestAction(name,courseid))

        dispatch({type : courseActionType.COURSE_DELETE_REQUEST, payload : refInput.current.value})

    }

    const selectAssigneeId = () => {

        refInput.current.Value = courseid
        setDis(true)
    }

    const valueofAssigneeId = (e: any) => {

        console.log(e.target.value, "aniket kumar it is", e.target.innerText)

        refInput.current.value = e.target.innerText

        setCourseid(e.target.innerText)

        setDis(false)
    }

    // if(successAddCourse)
    // {
    //   dispatch(alertset("successfully addedd","success"))
    // }

    const arr = { "msgtype": "success", "msg": "successfully added course" }

    const arr2 = { "msgtype": "danger", "msg": "course not added" }


    return (
        <>
            {course_id_to_delete_success && <Alertshow arrs={arr} />},
            {course_id_to_delete_error && <Alertshow arrs={arr2} />},
            <Form style={{ marginTop: '100px' }}>

                <Form.Group className="mb-3" controlId="AssigneeId">
                    <Form.Label>Assignee id</Form.Label>
                    <Form.Control type="number" placeholder="Enter ProjectiD" ref={refInput} onMouseEnter={assigneeFunc} onMouseLeave={notassigneeFunc} disabled={dis} />


                    <Form.Text className="text-muted">

                    </Form.Text>

                    <span><Button onClick={(e) => submitHandlerFunc(e)}>Submit</Button></span>
                </Form.Group>

                {dis && <h6 style={{ marginBottom: '4px' }}>Please select below project ids to delete</h6>}
                <div className={`banner ${dis ? "active" : ""}`} >
                    <ul className="list-group" onMouseEnter={selectAssigneeId} onMouseLeave={deselectAssigneeId} onClick={(e) => valueofAssigneeId(e)}>

                        <table className="table table-info table-striped">
                            {/* <thead>
                                <tr>
                                    <th scope="col">Project Id</th>
                                    
    
                                </tr>
                            </thead> */}
                            <tbody>
                                {get_project_success && get_projects.map((u: any) => (
                                    <tr key={u.project_id}>
                                        <td>{u.project_id}</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* {get_project_success && get_projects.map((u : any) => 
         
            <>
             
            <li className="list-group-item" key = {u.project_id}> {u.project_id} </li>
          
            <li className="list-group-item" key = {u.project_id}> {u.name} </li>
            </> */}
                    </ul>
                </div>






                <br />
                <br />
                {/* {errorAddCourse ? <div style = {{color : 'red'}}>Please enter course and assignee id correctly</div> : <div></div>}

    {successAddCourse ? <div style={{color : 'green'}}>Success</div> : <div></div>} */}


            </Form>
        </>
    );
};

export default DeleteProjectScreen;
