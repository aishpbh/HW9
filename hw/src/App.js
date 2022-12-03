import logo from './logo.svg';
import './App.css';
import { NaviBar } from './NaviBar';
import { UsersList } from './UsersList';
import { Home } from './Home';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { CreateUser } from './CreateUser';
import { Edituser } from './Edituser';
import {Login} from './Login';
import {ProtectedRoutes} from './routes/ProtectedRoutes';
import {DeleteUser} from './DeleteUser';
import {MusicList} from './MusicList'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<ProtectedRoutes/>}>
      <Route path="/" element={<Home />} />
        <Route path="/userslist" element={<UsersList />} />
        <Route path="/userslist/:userid" element={<Edituser />} />
        <Route path="/deleteUser/:userid" element={<DeleteUser />} />
        <Route path="/musiclist" element={<MusicList />} />
        </Route>
      
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
      {/*
      <h1> Our Customers</h1>
      {<UsersList/>*/}
    </div>
  );
}

export default App;
