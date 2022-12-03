import react, { useEffect, useState } from 'react'
import {Table,Button} from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export function MusicList(){ 
  const [musicList, setMusicList] = useState([]);
  const navigate = useNavigate();
  const getMusicList =  async () =>{
    const {data} = await axios.get('http://localhost:4000/api/musicList')
    setMusicList(data);
    console.log(data , 'musicList');
  }
  useEffect(()=>{

    getMusicList()

  },[])
  console.log(musicList, 'musicList test')
return ( <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Music Name</th>
        <th>Artist</th>
        <th>Inventory</th>
      </tr>
    </thead>
    <tbody>
      {
        musicList.length>0 && musicList.map((item,index)=>{
          return ( <tr>
            <td>{item.musicid}</td>
            <td>{item.musicname}</td>
            <td>{item.artist}</td>
            <td>{item.inventry}</td>
             </tr>)

          }
         )
      }
      
      
    </tbody>
  </Table>)
}
