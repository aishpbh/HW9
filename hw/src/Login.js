import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export function Login() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
        const {data:{user,token},} = await axios.post("http://localhost:4000/api/login",{username,password});
         sessionStorage.setItem("token",token);
         sessionStorage.setItem("user",JSON.stringify(user));  
         navigate('/usersList')
        }catch(err){
            console.log(err.message);
        }


    }

  return (
       <Card style={{width:'50%',marginLeft:'20%', marginTop:'5%'}}>
    <Card.Header>Sign In</Card.Header>
    <Card.Body>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={username} onChange={(e)=>setusername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="enter Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Login
      </Button>

      </Form>
      
    </Card.Body>
  </Card>
  
  )
}
