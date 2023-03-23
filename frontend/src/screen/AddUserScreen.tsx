

import * as React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './style/addUserScreen.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Alertshow } from '../component/AlertShow';

import { alertset, userSignupRequestAction } from '../state/action-creators';
import { useAppSelector } from '../Types';


import { useEffect } from 'react';



interface IAppProps {
}

const AddUserScreen: React.FunctionComponent<IAppProps> = (props) => {

  

    const [fullName,setFullName] = React.useState('')

  const [email,setEmail] = useState('')

  const [password,setPassword] = useState('')

  const [isAdmin,setIsAdmin] = useState(true)

  const [errorss,setErrorss] = useState(false)

  const [username,setUsername] = useState('')

  const dispatch = useDispatch()

  const navigate = useNavigate()

  // const alertData : []  = useAppSelector(state => state.alertReducer);
  
  const {successSignup, loadingSignup,errorSignup} = useAppSelector((state : any)=> {
    
    return state.userReducer
  })


  useEffect(() => {


    if(!localStorage.getItem('userdata'))
    {
        navigate('/user/login')
    }

    if(localStorage.getItem('userdata'))
    {
       const userRole = localStorage.getItem('userdata')

       if(userRole != 'Admin')
       {
          navigate('/navigate')
       }
    }

},[])

  console.log(successSignup,"success")
  // if(success && !loading)
  // {
  //   console.log("skjvbsk")
  //   dispatch(alertset("success added","success"))

  // }
  const usernameFunc = (e : string) => {

    setUsername(e)

    setErrorss(false)
  }
  const fullNameFunc = (em : string) => {
    setFullName(em)

    setErrorss(false)
  }


  const emailFunc = (em : string) => {

      setEmail(em)

      setErrorss(false)
  }

  const passFunc = (em: string) => {

    setErrorss(false)
      setPassword(em)
  }

  const adminFunc = (che : string) => {
      setIsAdmin(!isAdmin)

      setErrorss(false)
  }

  const userFunc = (che : string) => {

      setIsAdmin(!isAdmin)

      setErrorss(false)
  }

  const submitHandlerFunc = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

      e.preventDefault()
      
      let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

      if(email.match(regex) && (password.length >= 6) && username !== null)
      {
          const str = isAdmin ? "Admin" : "User";

          dispatch(userSignupRequestAction(username, email,password,str))
      }
      else{

          setErrorss(true)
      }
  }
  
  const arr = {"msgtype" : "success", "msg" : "successfully added user"}

  const arr2 = {"msgtype" : "danger", "msg" : "user not added"}


  console.log("heyyyy",successSignup)
return (
  <>
  {successSignup && !loadingSignup && <Alertshow arrs = {arr}/>},
  {errorSignup && !successSignup && !loadingSignup && <Alertshow arrs = {arr2}/>},
  {errorss ? <h5 style = {{color : 'red'}}>Please enter email and password correctly</h5> : <div></div>}
  <div className="addUserPage position-relative bg-light d-flex align-items-center justify-content-center w-100">
      <div className="addUser">
        <h1 className="mb-3">Add User</h1>
        <form className="needs-validation">
          <div className="form-group was-validated mb-2">
            <label htmlFor="userName" className="form-label">
              UserName :
            </label>
            <input
              type="text"
              id="userName"
              className="form-control"
              onChange = {(event) => usernameFunc(event.target.value)}
              required
            />
            <div className="invalid-feedback">
              Please enter your username
              </div>
            
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="email" className="form-label">
              Email :
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              onChange = {(event) => emailFunc(event.target.value)}
              required
            />
            <div className="invalid-feedback">
              Please enter your email
              </div>
            
          </div>
          <div className="form-group  was-validated mb-2">
            <label htmlFor="password" className="form-label">
              Password :
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              onChange = {(event) => passFunc(event.target.value)}
              required
            />
             <div className="invalid-feedback">
              Please enter your password
              </div>
            
          </div>
            
          <div>
            <label htmlFor="role" className="form-label">
              Role :
            </label>
            <select
          className="form-select"
        >
          <option value="">Select a role</option>
          <option value="admin" >Admin</option>
          <option value="user" >User</option>
        </select>
            {/* <select className="form-select" aria-label="Default select example">
              <option value="1">Admin</option>
              <option value="2"
               label="User">User</option>
            </select> */}
          
          </div>   
          <button 
          type="submit" 
          className="btn btn-success w-100 mt-2"
          onClick = {submitHandlerFunc}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddUserScreen;


