
import react, { useEffect, useState } from 'react'
import {Table,Button} from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export function UsersList(){ 
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();
  const getUsersList =  async () =>{
    const {data} = await axios.get('http://localhost:4000/api/usersList')
    setUsersList(data);
    console.log(data , 'usersList');
  }
  useEffect(()=>{

    getUsersList()

  },[])
  console.log(usersList, 'usersList test')
return ( <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Username</th>
        <th>password</th>
        <th>Edit User</th>
        <th>Delete User</th>
      </tr>
    </thead>
    <tbody>
      {
        usersList.length>0 && usersList.map((item,index)=>{
          return ( <tr>
            <td>{item.userid}</td>
            <td>{item.username}</td>
            <td>{item.password}</td>
            <td> <Button variant="warning" onClick={()=>navigate(`/usersList/${item.userid}`)}>Edit</Button>{' '}</td>
            <td> <Button variant="danger" onClick={()=>navigate(`/DeleteUser/${item.userid}`)}>Delete</Button>{' '}</td>
            </tr>)

          }
         )
      }
      
      
    </tbody>
  </Table>)
}
