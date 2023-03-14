

import * as React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { alertset, userSignupRequestAction } from '../state/action-creators';
import { useAppSelector } from '../Types';
import Alerts from './Alertscreen';

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

  const alertData : []  = useAppSelector(state => state.alertReducer);
  
  const {success, loading} = useAppSelector(state => state.userSignup)

  console.log(success,"success")
  // if(success && loading)
  // {
  //   console.log("skjvbsk")
  //   dispatch(alertset("success added","success"))

  // }
  const usernameFunc = (e : string) => {

    setUsername(e)
  }
  const fullNameFunc = (em : string) => {
    setFullName(em)

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
  }

  const userFunc = (che : string) => {

      setIsAdmin(!isAdmin)
  }

  const signupHandler = () => {

    navigate('/signup')
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
  
 
return (
  <>
  {alertData.length > 0 && <Alerts/>}
  <Form style = {{marginTop : '100px'}}>
    <Form.Group className="mb-3" controlId="fullName">

      <Form.Label>user name</Form.Label>
      <Form.Control type="text" placeholder="Enter your fullname"  onChange = {(event) => usernameFunc(event.target.value)}/>
      <Form.Text className="text-muted">
  
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  onChange = {(event) => emailFunc(event.target.value)}/>
      
      <Form.Text className="text-muted">
       
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  onChange = {(event) => passFunc(event.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox" style = {{margin : '2px'}}>
      <Form.Check type="radio" label="Admin" onChange = {(event) => adminFunc(event.target.value)} checked = {isAdmin}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox" style = {{margin : '2px'}}>
      <Form.Check type="radio" label="User" onChange = {(event) => userFunc(event.target.value)} checked = {!isAdmin}/>
    </Form.Group>

    <Button onClick = {submitHandlerFunc}>Submit</Button>
    
    
    <br/>
    <br/>
    {errorss ? <div style = {{color : 'red'}}>Please enter email and password correctly</div> : <div></div>}
  
  </Form>
  </>
  );
};

export default AddUserScreen;


