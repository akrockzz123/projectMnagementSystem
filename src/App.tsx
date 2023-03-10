



import React, { useEffect } from 'react';

import './App.css';
//import  LoginScreen from './screen/LoginScreen'
import { userLoginRequestAction } from './state/action-creators';

import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import Header from './component/Header';
import LoginScreen from './screen/LoginScreen';
import { Container } from '@mui/material';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SignupScreen from './screen/SignupScreen';
import HomeScreen from './screen/HomeScreen';
import ListAllUsersScreen from './screen/ListAllUsersScreen';
import AddUserScreen from './screen/AddUserScreen';
import ShowProjectOfUser from './screen/ShowNotAssignedProjectOfUser';

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
    <div>
      <Header/>
      <Container>
       <Routes>
        <Route path = '/' element = {<HomeScreen/>} />
        <Route path = '/login' element = {<LoginScreen/>} />
        <Route path = '/signup' element = {<SignupScreen/>} />
        <Route path = '/users' element = {<ListAllUsersScreen/>} />

        <Route path = '/users/:id' element = {<ShowProjectOfUser/>} />
        <Route path = '/users/add' element = {<AddUserScreen/>} />
        
       
       </Routes>
       
    </Container>
    </div>
    
  );
}

export default App;


