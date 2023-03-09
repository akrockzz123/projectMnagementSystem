



import React, { useEffect } from 'react';

import './App.css';
//import  LoginScreen from './screen/LoginScreen'
import { userLoginRequestAction } from './state/action-creators';

import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import Header from './component/Header';
import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import { Container } from '@mui/material';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SignupScreen from './screen/SignupScreen';
import HomeScreen from './screen/HomeScreen';

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
<<<<<<< HEAD
    <div>
      <Header/>
      <Container>
       <Routes>
        <Route path = '/' element = {<HomeScreen/>} />
        <Route path = '/login' element = {<LoginScreen/>} />
        <Route path = '/signup' element = {<SignupScreen/>} />
       </Routes>
       
=======
    <Container>
       <Header/>
       <div>Hello from App</div>
       {/* <LoginScreen/> */}
       <br/>
        <br/>
       <HomeScreen/>
>>>>>>> 2a90ad0f4039977a5bb1468661670e06b4420fbb
    </Container>
    </div>
    
  );
}

export default App;


