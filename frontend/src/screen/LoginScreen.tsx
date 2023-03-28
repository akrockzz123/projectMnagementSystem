
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './style/loginScreen.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Alert from "react-bootstrap/Alert";

//import { useNavigate } from 'react-router-dom'

import { alertset, userinfoRequest, userLoginRequestAction, userLoginSuccessAction } from '../state/action-creators'
import { useAppSelector } from '../Types'



import { Alertshow } from '../component/AlertShow';
type Props = {}

function LoginScreen({ }: Props) {


  const navigate = useNavigate()

  useEffect(() => {

    const itemSet = (localStorage.getItem('userdata'));
    console.log(itemSet)
    if (itemSet) {
      console.log('here')
      navigate('/navigate')
    }
  }, [])


  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [isAdmin, setIsAdmin] = useState(false)

  const [errorss, setErrorss] = useState(false)

  const [successlogin, setSuccesslogin] = useState(false)

  const dispatch = useDispatch()

  const { successLogin, loadingLogin, errorLogin, message, userIdLogin, userNameLogin } = useAppSelector((state:any) => {
    console.log(state);
    return state.userReducer;
})

  const useremailFunc = (em: string) => {

    setEmail(em)

    setErrorss(false)
  }

  const passFunc = (em: string) => {

    setErrorss(false)
    setPassword(em)
  }

  const adminFunc = (che: string) => {
    setIsAdmin(!isAdmin)
  }

  const userFunc = (che: string) => {

    setIsAdmin(!isAdmin)
  }

  const loginHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    e.preventDefault()
    dispatch(userLoginRequestAction(email, password))
  }

  if (successLogin) {
    const obj = {

      userId: userIdLogin,

      userName: userNameLogin
    }

    const userdata = JSON.stringify(obj)

    localStorage.setItem('userdata', userdata)

    //dispatch(userinfoRequest(userId))

    //dispatch(userLoginSuccessAction())


    setTimeout(() => {
      navigate('/navigate')
    }, 4000);


  }

  const arr = { "msgtype": "success", "msg": `Hi ${userNameLogin} welcome !!` }

  const arr2 = { "msgtype": "danger", "msg": "email or password invalid" }


  return (
    <>
    {
      successLogin ? <Alertshow arrs={arr} /> : <div></div>
    },
    {
      errorLogin && !loadingLogin && !successLogin ? <Alertshow arrs={arr2} /> : <div></div>
    },
     <div className="loginPage bg-light-medium d-flex align-items-center justify-content-center w-100">
    <div className="login">
      <h1 className="mb-3">Login</h1>
      <form>
        <div className="form-group was-validated mb-2">
          <label htmlFor="userEmail" className="form-label">
            UserEmail :
          </label>
          <input
            type="email"
            id="userEmail"
            className="form-control"
            onChange={(e) => {
              useremailFunc(e.target.value);
            }}
            required
          />
           <div className="invalid-feedback">
            Please enter your username
            </div>
          <br />
        </div>
        <div className="form-group form-group was-validated  mb-2">
          <label htmlFor="password" className="form-label">
           Password :
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            onChange={(e) => {
              passFunc(e.target.value);
            }}
            required
          />
            <div className="invalid-feedback">
            Please enter your password
            </div>
            {errorss ? <div style={{ color: 'red' }}>Please enter username and password correctly</div> : <div></div>}
          <br />
        </div>
        <button 
        type="submit" 
        className="btn btn-success block mt-2"
        onClick={(e) => loginHandler(e)}
        >
          Login
        </button>
      </form>
    </div>
  </div>
  </>
  )
}

export default LoginScreen