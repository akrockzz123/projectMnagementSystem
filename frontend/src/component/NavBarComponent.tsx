
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
    <nav className="navbar fixed-top align-items-center justify-content-center navbar-expand-lg navbar-light mx-auto p-2" style={{backgroundColor:"#e3f2fd"}}>
      <div className="navbar-brand ">Welcome {props.username} !!</div>
          <Nav className="me-auto ">
            <Nav.Link><Button onClick = {props.showusers}>Show All Users</Button></Nav.Link>
            {props.role === 'Admin' && <Nav.Link ><Button onClick = {props.addUser}>Add User</Button></Nav.Link>}
            {props.role === 'Admin' && <Nav.Link><Button onClick = {props.addProject}>Add Project</Button></Nav.Link> }
            <Nav.Link><Button onClick = {props.AssignProject}>Assigned Project</Button></Nav.Link>
            <Nav.Link><Button variant = 'danger' onClick = {props.LogoutHandler}>Logout</Button></Nav.Link>
          </Nav>
        
      </nav>

    </div>
  )
}

export default NavBarComponent