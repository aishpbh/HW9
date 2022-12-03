import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export function CreateUser() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const {data} = await axios.post('http://localhost:4000/api/createUser',{username,password});
            alert(`user ${username} has been created`);
            navigate('/usersList')
        }
        
        catch(err){
            console.log(err.message);
        }
            

    }
    return (

    <Card style={{width:'50%',marginLeft:'20%', marginTop:'5%'}}>
    <Card.Header>Create User</Card.Header>
    <Card.Body>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e)=>setusername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Create User
      </Button>
    </Form>
      
    </Card.Body>
  </Card>
  )
}

