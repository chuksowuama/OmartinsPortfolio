import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';



const ProtectedRoute = ({children}) => {
    const userData=useSelector((state)=>state.stored.user||null)

     if(userData){
        return children;
     }
     return <Navigate to={"/login"} replace />
}

export default ProtectedRoute
