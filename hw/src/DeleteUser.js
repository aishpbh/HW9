import React, { useState } from 'react'
import axios from 'axios';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export function DeleteUser() {
    const { userid } = useParams();
    const navigate= useNavigate();
   // const [username, setuserid] = useState('');
    const {data} = axios.delete(`http://localhost:4000/api/deleteUser/${userid}`);
    alert('user deleted'); 

    console.log('entered deleteuser')
  return(
    <Card style={{ width: '18rem' , align:'center'}}>
    <Card.Body>
      <Card.Title>USER DELETED</Card.Title>
      <Card.Text>
       THE USER IS DELETED
      </Card.Text>
      <Button variant="primary" onClick={()=>navigate(`/usersList`)}>Back</Button>
    </Card.Body>
  </Card>
  )
}
