

import * as React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

interface IAppProps {
}

// Name        string `json:"name"`
// 	Assignee_id string `json:"assignee_id"`
// 	Status      string `json:"status"`

const AddProjectScreen: React.FunctionComponent<IAppProps> = (props) => {

    const [name,setName] = React.useState('')

    const [assigneeid,setAssigneeid] = useState('')


    const nameFunc = (name : string) => {

        setName(name)

    }

    const assigneeFunc = (assign : string) => {

        setAssigneeid(assign)
    }

    const submitHandlerFunc = () => {

        
    }

  return (

    <Form style = {{marginTop : '100px'}}>
    <Form.Group className="mb-3" controlId="fullName">

      <Form.Label>Project name</Form.Label>
      <Form.Control type="text" placeholder="Enter Project name"  onChange = {(event) => nameFunc(event.target.value)}/>
      <Form.Text className="text-muted">
  
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Assignee id</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  onChange = {(event) => assigneeFunc(event.target.value)}/>
      
      <Form.Text className="text-muted">
       
      </Form.Text>
    </Form.Group>

   

    <Button onClick = {submitHandlerFunc}>Submit</Button>
    
    
    <br/>
    <br/>
    {errorss ? <div style = {{color : 'red'}}>Please enter email and password correctly</div> : <div></div>}
  
  </Form>
  );
};

export default AddProjectScreen;
