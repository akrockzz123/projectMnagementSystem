
//import React from "react";
import "../style/login.css";
import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

import { Userinformation } from "../models/model_type";

import Form, { Container, Navbar } from 'react-bootstrap'


import * as React from 'react';

interface IAppProps {
}

const Header: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Navbar fixed = "top" bg = "dark" variant = "dark">
          <Container>
            <Navbar.Brand>
              Project Management system
            </Navbar.Brand>
          </Container>
    </Navbar>
  );
};

export default Header;
