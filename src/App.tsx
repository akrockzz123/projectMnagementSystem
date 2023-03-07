



import React, { useEffect } from 'react';

import './App.css';
//import  LoginScreen from './screen/LoginScreen'
import { userLoginRequestAction } from './state/action-creators';

import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import Header from './component/Header';
import LoginScreen from './screen/LoginScreen';
import { Container } from '@mui/material';
import { BrowserRouter as Router,Route,Routes, useRoutes} from 'react-router-dom';
import SignupScreen from './screen/SignupScreen';

function App() {

 const dispatch = useDispatch()

  /*useEffect(() => {

    dispatch(userLoginRequestAction('aniketkumar1601@gmail.com', 'aniket1234'))
  },[userLoginRequestAction]);*/


  const func = () => {

    console.log("sbfjhfj")
    dispatch(userLoginRequestAction('aniketkumar1601@gmail.com', 'aniket1234'))
  }
  

  let element = useRoutes([
    {path: '/', element : <LoginScreen/>},
    {path: '/signup', element: <SignupScreen/>}
  ])

  return (
    <div>
      <Header/>
      <Container>
       <Header/>
        {element}
       
    </Container>
    </div>
    
  );
}

export default App;


