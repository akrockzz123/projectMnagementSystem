
import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'

type Props = {
    username : string,
    showusers : any,
    addUser : any,
    addProject : any,
    AssignProject : any,
    LogoutHandler : any,
    role : string

}

const NavBarComponent : any = (props: Props) => {
  return (
     <div>
    <nav className="navbar fixed-top align-items-center justify-content-center navbar-expand-lg navbar-light mx-auto p-2" style={{backgroundColor:"#62B6B7"}}>
      <div className="navbar-brand ">Welcome <span className="text-uppercase"> {props.username}</span> !!</div>
          <Nav className="me-auto ">
            <Nav.Link><button className="btn btn-light" onClick = {props.showusers}>Show All Users</button></Nav.Link>
            {props.role === 'Admin' && <Nav.Link ><button className="btn btn-light" onClick = {props.addUser}>Add User</button></Nav.Link>}
            {props.role === 'Admin' && <Nav.Link><button  className="btn btn-light" onClick = {props.addProject}>Add Project</button></Nav.Link> }
            <Nav.Link><button className="btn btn-light" onClick = {props.AssignProject}>Assigned Project</button></Nav.Link>
            <Nav.Link><button className="btn btn-danger" onClick = {props.LogoutHandler}>Logout</button></Nav.Link>
          </Nav>
        
      </nav>

    </div>
  )
}

export default NavBarComponent