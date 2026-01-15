import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';



const ProtectedRoute = ({children}) => {
     const selectedLogin=useSelector((state)=>state.stored.LoginStored||{})

     if(selectedLogin.isloggedin){
        return children;
     }
     return <Navigate to={"/login"} replace />
}

export default ProtectedRoute
