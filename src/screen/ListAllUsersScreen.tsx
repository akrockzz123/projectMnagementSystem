

import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { LinkContainer } from 'react-router-bootstrap'
import Message from '../component/Message'

import { useAppSelector } from '../Types'

import { useDispatch } from 'react-redux'
import { userinfoRequest, UsersListRequestAction, userUpdateAdminActionRequest } from '../state/action-creators'

import { useNavigate } from 'react-router-dom'

import Loading from '../component/Loading'



const AssignHandler = (userid : string,navigate : any) => {

  

  
  // const val = JSON.parse(usersall)


  // const useridget : any = val.userId



  console.log("AssignHandler function", userid)
  

  navigate(`/users/${userid}`)
}

type Props = {}

type usercheck = {
  user_id : string,
  userName : string,
  email : string,

  role : string,

  status: string,

  Projects: null
}
type usersTypesInfo = {

  email: string,

  password : string,

  loading: boolean,

  success: boolean,

  error: {},
  users : [usercheck],

  usersLoading : boolean,

  successUsers : boolean,

  errorusers : boolean
}




function ListAllUsersScreen({}: Props) {

  const usersall : any = localStorage.getItem('userdata')

  const navigate = useNavigate()

  const val = JSON.parse(usersall)


  const useridget : any = val.userId
  //const navigate : any = useNavigate()

  if(!usersall)
  {
    navigate('/login')
  }
  /*users : [],

  usersLoading : true,

  successUsers : false,

  errorusers : <false></false>
  */

  const dispatch = useDispatch()

  const usersStates : usersTypesInfo  = useAppSelector(state => state.usersReducer)
  const {loadingupdate,successupdate,errorupdate} = useAppSelector(state => state.userUpdateAdminReducer)
  const {users,usersLoading ,successUsers,errorusers} = usersStates


  if(successupdate)
  {
    dispatch(UsersListRequestAction())
  }

  useEffect(() => {

    dispatch(UsersListRequestAction())
    //dispatch(userinfoRequest(useridget))
    //dispatch(UsersListRequestAction())
  },[])


 


  

  
  console.log("check",users,usersLoading)
  /*users : [],

    usersLoading : boolean,

    successUsers : boolean,

    errorusers : boolean*/
//var ts : string = typeof(users).toString()

const updateUserHandler = (id : string,e : React.MouseEvent<HTMLButtonElement>) => {

  e.preventDefault()

  //dispatch()

  dispatch(userUpdateAdminActionRequest(id))

  //dispatch(UsersListRequestAction())
}


  return (
    
   
    <div>
    <br/>
    <br/>

    <h1>Users</h1>
    {usersLoading ? <Loading/> : successUsers ? <><Table  striped bordered hover responsive className='table-sm'>
      <thead>
        <tr>
          
          <th>user_id</th>
          <th>user Name</th>
          <th>email</th>
          <th>Role</th>
          <th>Assign Project</th>
          <th>Update user</th>
        </tr>
      </thead>
      <tbody>
        
          {users.map(u => 
            <tr key = {u.user_id}>
              <td>{u.user_id}</td>
              <td>{u.userName}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td ><Button variant='primary' onClick = { () => AssignHandler(u.user_id,navigate)}>Assign</Button> </td>
              <td>{u.role == "User" ? (<Button onClick = {(e) => updateUserHandler(u.user_id,e)}>Update User</Button>) : (<div></div>)} </td>
            </tr>
          )}
        
       
        
      </tbody>
    </Table></> : <h1>Error</h1> }
  </div>
    
  )
}

/*{users.map(user => (
  <tr key ={user._id}>
    <td>{user._id}</td>
    <td>{user.name}</td>
    <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
    <td>{user.isAdmin ? (<i className='fas fa-check' style ={{color: 'green'}}></i>) : (<i className='fas fa-times' style ={{color: 'red'}}></i>)}</td>
    <td>
      <LinkContainer to = {`/update/${user._id}`}>
        <Button variant='light' className='btn-sm' >
          <i className='fas fa-edit'></i>
        </Button>
      </LinkContainer>
      <Button variant='danger' className='btn-sm'></Button>
    </td>
  </tr>
))}*/


export default ListAllUsersScreen