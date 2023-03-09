

import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { LinkContainer } from 'react-router-bootstrap'
import Message from '../component/Message'

import { useAppSelector } from '../Types'

type Props = {}

type usersTypesInfo = {

  email: string,

  password : string,

  loading: boolean,

  success: boolean,

  error: {},
  users : [],

  usersLoading : boolean,

  successUsers : boolean,

  errorusers : boolean
}

function ListAllUsersScreen({}: Props) {

  /*users : [],

  usersLoading : true,

  successUsers : false,

  errorusers : <false></false>
  */

  const usersStates : usersTypesInfo  = useAppSelector(state => state.usersReducer)

  

  const {users,usersLoading ,successUsers,errorusers} = usersStates

  /*users : [],

    usersLoading : boolean,

    successUsers : boolean,

    errorusers : boolean*/

  return (
    
    <>
    <h1>Users</h1>
    {usersLoading ? <h1>Loading...</h1> : errorusers ? <div>Error</div>: (

      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          
        </tbody>
      </Table>
    )}
  </>
    
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