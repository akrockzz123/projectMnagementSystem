




import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import NavBarComponent from '../component/NavBarComponent'
import { LinkContainer } from 'react-router-bootstrap'
import Message from '../component/Message'

import { useAppSelector } from '../Types'

import { useDispatch } from 'react-redux'
import { userinfoRequest, UsersListRequestAction, userUpdateAdminActionRequest, userDeleteRequestAction, getAllProjectsRequest, courseDeleteRequestAction } from '../state/action-creators'

import { useNavigate, useParams } from 'react-router-dom'

import Loading from '../component/Loading'

import { useGlobalContext } from '../contexts/globalContext'

//import Context from 'react-redux/es/components/Context'








type Props = {

 
}

const ListAllProjectScreen : any = (props : Props)  => {

  
  console.log(props,"listalluserscreen")

 
//   const {username,showUsers,addUser,addProject,AssignProject,LogoutHandler,role} = useGlobalContext()
  
//  console.log(showUsers,"hey aniket wgeuudbq ")
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
  const {get_projects_loading,get_projects_success,get_projects_error,get_projects} = useAppSelector(state => {

    return state.courseReducer
  })


  
  

  useEffect(() => {

    //dispatch(userinfoRequest(userids))
    dispatch(getAllProjectsRequest())
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


      const value = localStorage.getItem('role')

      if(value != 'Admin')
      {
        navigate('/navigate')
      }

     
    }
  },[])
  


const deleteCourseHandler : any =(id : string, e : React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  console.log("delete course",id)
  dispatch(courseDeleteRequestAction(id))

  dispatch(getAllProjectsRequest())
}






const link1 = <div>
<br />

<h1 className="text-white bg-dark text-center mb-3">Show All Users</h1>
{get_projects_loading ? (
  <Loading />
) : get_projects_success ? (
  <>
    <table className="table table-info table-striped m-5">
      <thead>
        <tr>
        <th scope="col">Project Id</th>
        <th scope="col">Project name</th>
        <th scope="col">Project status</th>
        <th scope="col">Delete Project</th>
      </tr>
      </thead>
      <tbody>
        {get_projects.map((u: any) => (
          <tr key={u.project_id}>
            <td>{u.project_id}</td>
            <td>{u.name}</td>
            <td>{u.status}</td>
            
            <td>
              <button className="btn btn-danger"
                onClick={(e) => deleteCourseHandler(u.project_id,e)}
              >
                Delete
              </button>{" "}
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

            return (
                <>
                  {link1}
                </>
            );
}

export default ListAllProjectScreen

