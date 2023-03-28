

import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import NavBarComponent from '../component/NavBarComponent'
import { LinkContainer } from 'react-router-bootstrap'
import Message from '../component/Message'

import { useAppSelector } from '../Types'

import { useDispatch } from 'react-redux'
import { userinfoRequest, UsersListRequestAction, userUpdateAdminActionRequest, userDeleteRequestAction } from '../state/action-creators'
``
import { useNavigate, useParams } from 'react-router-dom'

import Loading from '../component/Loading'

import { useGlobalContext } from '../contexts/globalContext'

//import Context from 'react-redux/es/components/Context'




const AssignHandler = (userid : string,navigate : any) => {

  

  const datas : any = localStorage.getItem('userdata')

  const usersdata = JSON.parse(datas)

  const dispatch = useDispatch()

  if(usersdata.userId == userid)
  {

  }
  else{

    if(localStorage.getItem('role') != 'Admin')
    {
      return
    }
  }
  
  
  // const val = JSON.parse(usersall)


  // const useridget : any = val.userId



  console.log("AssignHandler function", userid)
  

  navigate(`/users/${userid}`)
}

// type Props = {}

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


type Props = {

  username : string,
  showUsers : any,
  addUser : any,
  addProject : any,
  AssignProject : any,
  LogoutHandler : any,
  role : string,
  userid : any
}

const ListAllUsersScreen : any = (props : Props)  => {

  
  console.log(props,"listalluserscreen")

 
  const {username,showUsers,addUser,addProject,AssignProject,LogoutHandler,role} = useGlobalContext()
  
  console.log(showUsers,"hey aniket wgeuudbq ")
  const navigate = useNavigate()

  const ids = useParams()

  

  //console.log(ids,"avvua",x)

  const showProjectofUserHandler : any = (id : any,props : Props) => {


    navigate(`/user/project/${id}`)
  }

  if(localStorage.getItem('userdata') != undefined)
  {
    const usersall : any = localStorage.getItem('userdata') 

  
   const val  = JSON.parse(usersall)

   const userids = val.userId
  }

  // const useridget : any = val.userId
     //const navigate : any = useNavigate()

  if(localStorage.getItem('userdata') == 'undefined')
  {
    navigate('/user/login')
  }
  /*users : [],

  usersLoading : true,

  successUsers : false,

  errorusers : <false></false>
  */

  const dispatch = useDispatch()
  const usersStates : usersTypesInfo  = useAppSelector((state : any) => state.userReducer)
  const {loadingupdate,successupdate,errorupdate} = useAppSelector((state : any) => state.userReducer)
  const {users,usersLoading ,successUsers,errorusers} = usersStates
  const {loadinguserinfo,successuserinfo,usersData} = useAppSelector(state => state.userReducer)


  if(successupdate)
  {
    dispatch(UsersListRequestAction())
  }


  const navigateHandler = () => {
    navigate('/navigate')
  }
  // if(successuserinfo) // storing data of login data
  // {
  //   const datas = JSON.stringify(usersData)

  //   localStorage.setItem('userLoginData',datas)
  // }

  useEffect(() => {

    //dispatch(userinfoRequest(userids))
    dispatch(UsersListRequestAction())
    //dispatch(userinfoRequest(userids))
    //dispatch(UsersListRequestAction())
  },[])

  useEffect(() => {

    if(!localStorage.getItem('userdata') || !localStorage.getItem('role'))
    {
      if(localStorage.getItem('userdata'))
      {
        localStorage.removeItem('userdata')
      }

      if(localStorage.getItem('role'))
      {
        localStorage.removeItem('role')
      }



      navigate('/login')
    }
  },[])
  

const updateUserHandler = (id : string,e : React.MouseEvent<HTMLButtonElement>) => {

  e.preventDefault()

  //dispatch()

  dispatch(userUpdateAdminActionRequest(id))

  //dispatch(UsersListRequestAction())
}
const deleteUserHandler : any =(id : string, e : React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  console.log("delete",id)
  dispatch(userDeleteRequestAction(id))

  dispatch(UsersListRequestAction())
}






const link1 = <div>
<br />

<h1 className="text-white bg-dark text-center mb-3">Show All Users</h1>
{usersLoading ? (
  <Loading />
) : successUsers ? (
  <>
    <table className="table table-info table-striped m-5">
      <thead>
        <tr>
        <th scope="col">UserId</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
        <th scope="col">AssignProject</th>
        <th scope="col">Upgrade Role</th>
        <th scope="col">Delete User</th>
      </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.user_id}>
            <td>{u.user_id}</td>
            <td>{u.userName}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>
            <td>
              <button className="btn btn-success"
                onClick={() => AssignHandler(u.user_id, navigate)}
              >
                Assign
              </button>{" "}
            </td>
            <td>
              {u.role === "User" ? (
                <button className="btn btn-warning" 
                onClick={(e) => updateUserHandler(u.user_id, e)}>
                  Update User
                </button>
              ) : (
                <div></div>
              )}{" "}
            </td>
            <td>
              {u.status === "Active" ? (
                <button className="btn btn-danger"
                  onClick={(e) => deleteUserHandler(u.user_id, e)}
                >
                  Remove
                </button>
              ) : (
                <div></div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
) : (
  <h1>Error</h1>
)}
</div>


const keywords : any = ids.keyword

console.log(typeof(keywords),"asdfghj")


let found = 0

let link2 =  usersLoading && props.userid != 0  ? (<Loading/>) : users.map((u) => {

  

  const x = props.userid

  if(u.user_id == x)
  {
    found = 1
    return (
      <table className="table table-info table-striped m-5" >
      <thead>
        <tr>
        <th scope="col">UserId</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
        <th scope="col">AssignProject</th>
        <th scope="col">Upgrade Role</th>
        <th scope="col">Delete User</th>
      </tr>
      </thead>
      <tbody>
        
          <tr key={u.user_id}>
            <td>{u.user_id}</td>
            <td>{u.userName}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>
            <td>
              <button className="btn btn-success"
                onClick={() => AssignHandler(u.user_id, navigate)}
              >
                Assign
              </button>{" "}
            </td>
            <td>
              {u.role === "User" ? (
                <button className="btn btn-warning" 
                onClick={(e) => updateUserHandler(u.user_id, e)}>
                  Update User
                </button>
              ) : (
                <div></div>
              )}{" "}
            </td>
            <td>
              {u.status === "Active" ? (
                <button className="btn btn-danger"
                  onClick={(e) => deleteUserHandler(u.user_id, e)}
                >
                  Remove
                </button>
              ) : (
                <div></div>
              )}
            </td>
          </tr>
        
      </tbody>
    </table>
      )
  }
  
} 
)

if(found == 0)
{
  link2 = <Container style = {{ padding : '20px' , textAlign : 'center'}}><h1>User not found</h1></Container>
}


return (
  <>
  
   {props.userid != 0 ? link2 : link1 }
  </>
)
}


export default ListAllUsersScreen