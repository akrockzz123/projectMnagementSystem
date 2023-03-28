



import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AssignProjectRequest, courseAddRequestAction, UsersListRequestAction } from '../state/action-creators';
//import { courseAddReducer } from '../state/reducers/courseAddReducer';
import { useAppSelector } from '../Types';

import { alertset } from '../state/action-creators';
import { Alertshow } from '../component/AlertShow';
import { userActionType } from '../state/action-types';

interface IAppProps {
}

// Name        string `json:"name"`
// 	Assignee_id string `json:"assignee_id"`
// 	Status      string `json:"status"`

const AddProjectScreen: React.FunctionComponent<IAppProps> = (props) => {

    const [name,setName] = React.useState('')

    const [assigneeid,setAssigneeid] = useState('')

    const [dis,setDis] = useState(false)

    const dispatch = useDispatch()

    const refInput : any = useRef(" ")

    //const alertData   = useAppSelector(state => state.user)

//     usersList(pin):
// usersLoading(pin):true
// successUsers(pin):false
// errorusers(pin):false
    
   const {users,usersLoading,successUsers,errorUsers} = useAppSelector((state : any) => {
    
    return state.userReducer
  })


    type addProjectState = {

        loadingAddCourse : boolean,
    
        errorAddCourse : boolean,
    
        successAddCourse : boolean
    }

    const addProject : addProjectState = useAppSelector((state: any) => {
      return state.courseReducer
    })

    const {loadingAddCourse, errorAddCourse,successAddCourse} = addProject


    useEffect(() => {

      dispatch(UsersListRequestAction())
    },[])
    
    const nameFunc = (name : string) => {

        setName(name)

    }

    const assigneeFunc : any = (assign : string) => {

        console.log(refInput,"aniket")

        refInput.current.value = ""
        setDis(true)
        setAssigneeid(assign)
    }

    const notassigneeFunc : any = () => {

      //setDis(false)
    }

    const deselectAssigneeId : any = () => {

      setDis(false)
    }
    const submitHandlerFunc : any = () => {

       console.log(name,assigneeid)
        dispatch(courseAddRequestAction(name,assigneeid))

    }

    const selectAssigneeId = () => {

      setDis(true)
    }

    const valueofAssigneeId = (e : any) => {

      console.log(e.target.value,"aniket kumar it is",e.target.innerText)

      refInput.current.value = e.target.innerText
    }

    // if(successAddCourse)
    // {
    //   dispatch(alertset("successfully addedd","success"))
    // }

    const arr = {"msgtype" : "success", "msg" : "successfully added course"}

    const arr2 = {"msgtype" : "danger", "msg" : "course not added"}

    console.log(users,"heyyy")
  return (
    <>
    {successAddCourse && <Alertshow arrs = {arr}/>},
    {errorAddCourse && <Alertshow arrs = {arr2} />},
    <Form style = {{marginTop : '100px'}}>
    
    <Form.Group className="mb-3" controlId="AssigneeId">
      <Form.Label>Assignee id</Form.Label>
      <Form.Control type="email" placeholder="Enter assigneediD" ref = {refInput} onMouseEnter  = {assigneeFunc} onMouseLeave = {notassigneeFunc} disabled = {dis} />
      
      
      <Form.Text className="text-muted">
       
      </Form.Text>
    </Form.Group>

    <div className={`banner ${dis ? "active" : ""}`} >
        <ul className="list-group" onMouseEnter={selectAssigneeId} onMouseLeave = {deselectAssigneeId} onClick = {(e) => valueofAssigneeId(e)}>

        {successUsers && users.map((u : any) => 
         
            <li className="list-group-item" key = {u.user_id}> {u.user_id} </li>
          
        
        )}
      </ul>
    </div>

   

    <Button onClick = {submitHandlerFunc}>Submit</Button>
    
    
    <br/>
    <br/>
    {/* {errorAddCourse ? <div style = {{color : 'red'}}>Please enter course and assignee id correctly</div> : <div></div>}

    {successAddCourse ? <div style={{color : 'green'}}>Success</div> : <div></div>} */}

  
  </Form>
  </>
  );
};

export default AddProjectScreen;
