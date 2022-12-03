import {Outlet, Navigate} from "react-router-dom";
import {getToken} from '../Authenticate.js'
export const  ProtectedRoutes=() =>{


    const token = getToken();
    return token?<Outlet/>: <Navigate to="/login"/>
  }
  
  