



import React, { useEffect } from 'react';

import './App.css';
import  LoginScreen from './screen/LoginScreen'
import { userLoginRequestAction } from './state/action-creators';

import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

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
    <div className="App">
      {/* <heyy How are you doinghhh> */}
      <LoginScreen />

      <button onClick = {func}>click me</button>
    </div>
  );
}

export default App;


