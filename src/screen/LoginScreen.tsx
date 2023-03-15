
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Alert from "react-bootstrap/Alert";

//import { useNavigate } from 'react-router-dom'

import { alertset, userinfoRequest, userLoginRequestAction, userLoginSuccessAction } from '../state/action-creators'
import { useAppSelector } from '../Types'

import Alerts from './Alertscreen'

import {Alertshow} from '../component/AlertShow';
type Props = {}

function LoginScreen({}: Props) {

    const [email,setEmail] = useState('')

    const [password,setPassword] = useState('')

    const [isAdmin,setIsAdmin] = useState(false)

    const [errorss,setErrorss] = useState(false)

    const [successLogin,setSuccessLogin] = useState(false)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {success, loading,error,message,userId,userName} = useAppSelector(state => state.usersReducer)

    const {loadinguserinfo,successuserinfo,usersData} = useAppSelector(state => state.userinfoReducer)
    const alertdata : []= useAppSelector(state => state.alertReducer)

    console.log("heyyy",error,loadinguserinfo,usersData)

    const userval = localStorage.getItem('userdata')

    if(userval)
    {
      navigate('/users')
    }
    // if(success)
    // {
    //   setSuccessLogin(true)
    // }

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

    // if(success)
    // {
    //   dispatch(alertset("successfully logged in", "success"))
    // }

    
    const submitHandlerFunc = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        e.preventDefault()


        console.log(error)

      //  useEffect(() => {

      //   const vb : string | null = localStorage.getItem('userdata')

      //   if(vb != null)
      //   {
      //     var obj = JSON.parse(vb)


      //   }
       

      //  },[])

        if(email.length > 0 && (password.length >= 6))
        {
            dispatch(userLoginRequestAction(email,password))
        }
        else{

            //setErrorss(true)
        }
    }

    if(success)
    {
      const obj = {

        userId : userId,

        userName : userName
      }

       const userdata = JSON.stringify(obj)

       localStorage.setItem('userdata', userdata)

       //dispatch(userinfoRequest(userId))

       //dispatch(userLoginSuccessAction())


       setTimeout(() => {
         navigate('/users')
      }, 2000);


    }

    const arr  = {"msgtype" : "success", "msg" : `Hi ${userName} welcome !!`}

    const arr2 = {"msgtype" : "danger", "msg" : "username or password invalid"}

    
  return (
   <>
    {
       success ? <Alertshow arrs = {arr} /> : <div></div>
    },
    {
       error && !loading && !success ? <Alertshow arrs = {arr2} /> : <div></div>
    },
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