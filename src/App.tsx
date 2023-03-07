



import React, { useEffect } from 'react';

import './App.css';
//import  LoginScreen from './screen/LoginScreen'
import { userLoginRequestAction } from './state/action-creators';

import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import Header from './component/Header';
import LoginScreen from './screen/LoginScreen';
import { Container } from '@mui/material';

function App() {

 const dispatch = useDispatch()

  /*useEffect(() => {

    dispatch(userLoginRequestAction('aniketkumar1601@gmail.com', 'aniket1234'))
  },[userLoginRequestAction]);*/


  const func = () => {

    console.log("sbfjhfj")
    dispatch(userLoginRequestAction('aniketkumar1601@gmail.com', 'aniket1234'))
  }
  
  return (
    <Container>
       <Header/>
       
       <LoginScreen/>
    </Container>
  );
}

export default App;


