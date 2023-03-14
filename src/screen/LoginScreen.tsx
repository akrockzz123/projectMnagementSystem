
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Alert from "react-bootstrap/Alert";

//import { useNavigate } from 'react-router-dom'

import { alertset, userLoginRequestAction } from '../state/action-creators'
import { useAppSelector } from '../Types'

import Alerts from './Alertscreen'

type Props = {}

function LoginScreen({}: Props) {

    const [email,setEmail] = useState('')

    const [password,setPassword] = useState('')

    const [isAdmin,setIsAdmin] = useState(false)

    const [errorss,setErrorss] = useState(false)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {success, loading,error,message,userId,userName} = useAppSelector(state => state.usersReducer)

    const alertdata : []= useAppSelector(state => state.alertReducer)
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

      dispatch(userLoginRequestAction(email,password))
    }

    if(success)
    {
      dispatch(alertset("successfully logged in", "success"))
    }

    
    const submitHandlerFunc = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        e.preventDefault()
        
       

        if(email.length > 0 && (password.length >= 6))
        {
            dispatch(userLoginRequestAction(email,password))
        }
        else{

            setErrorss(true)
        }
    }
    
  return (
   <>
    {alertdata.length > 0 && (
         <Alert variant="success" style={{ width: "42rem", marginTop: "100px" }}>
         <Alert.Heading>
           This is a success alert which has green background
         </Alert.Heading>
       </Alert>
    )},
    <Form style = {{marginTop : '100px'}}>
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
     
      {/* <Button variant="primary" type="submit" onClick = {(event) => submitHandlerFunc(event)}>
        Submit
      </Button> */}
      <br/>
      <br/>
      {errorss ? <div style = {{color : 'red'}}>Please enter email and password correctly</div> : <div></div>}

      <Button variant = 'primary' onClick = {signupHandler}>SignUp</Button>
    
    </Form>
    </>
  )
}

export default LoginScreen