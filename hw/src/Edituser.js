import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
export function Edituser() {
    const { userid } = useParams();

    const [userdetails, setuserdetails] = useState({
        username:'',
        password:''
    });
    const navigate = useNavigate();
    const getuserdetails = async ()=>{

        const {data} = await axios.get(`http://localhost:4000/api/usersList/${userid}`)
        setuserdetails({username:data[0].username,password:data[0].password})
        }

        const handleSubmit= async (e)=>{
          e.preventDefault();
           try{
            const {data} = await axios.put(`http://localhost:4000/api/updateUser`,{userid,username:userdetails.username,password:userdetails.password})
  
            console.log('data')
           }
          catch(err){
            console.log(err.message);
          }
        }
        useEffect(()=>{
        getuserdetails();
    },[])
 
  return (
    
    <Card style={{width:'50%',marginLeft:'20%', marginTop:'5%'}}>
    <Card.Header>Edit User</Card.Header>
    <Card.Body>
    <Form onSubmit={handleSubmit}>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User ID</Form.Label>
        <Form.Control type="text" placeholder="" value={userid} disabled/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={userdetails.username} onChange={(e)=>setuserdetails({...userdetails,username:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" value={userdetails.password} onChange={(e)=>setuserdetails({...userdetails,password:e.target.value})}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Details
      </Button>
    </Form>
      
    </Card.Body>
  </Card>

  )
}

