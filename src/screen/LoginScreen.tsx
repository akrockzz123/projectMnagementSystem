
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

//import { useNavigate } from 'react-router-dom'

import { userLoginRequestAction } from '../state/action-creators'
type Props = {}

function LoginScreen({}: Props) {

    const [email,setEmail] = useState('')

    const [password,setPassword] = useState('')

    const [isAdmin,setIsAdmin] = useState(false)

    const [errorss,setErrorss] = useState(false)

    const dispatch = useDispatch()

    const navigate = useNavigate()


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

      dispatch(userLoginRequestAction())
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
  )
}

export default LoginScreen