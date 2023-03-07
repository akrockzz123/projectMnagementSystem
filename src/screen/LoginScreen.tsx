
import React from "react";
import "../style/login.css";
import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

import Form from 'react-bootstrap'

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //const navigation = useNavigation();

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     setLoading(true);
  //     setError("");
  //     fetch("http://localhost:8080/api/auth/signin", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: username,
  //         password: password,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.accessToken) {
  //           setUser(data);
  //           setLoading(false);
  //           navigation.navigate("/home");
  //         } else {
  //           setError(data.message);
  //           setLoading(false);
  //         }
  //       });
  //   };

  return (
    <div className="form-container">
      <div className="login__container">
        <h1>Log in</h1>
        <form>
          <h5>Username</h5>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="login__signInButton" onClick={alert}>
            Log In
          </button>
        </form>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default LoginScreen;