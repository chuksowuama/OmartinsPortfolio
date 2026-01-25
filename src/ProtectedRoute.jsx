import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { auth } from './Firebase';



const ProtectedRoute = ({children}) => {
   const[user,setuser]=useState(undefined);
    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
         if(currentUser){
            setuser(currentUser);
         }else{
            setuser(null)
         }
      })
      return ()=>unsubscribe();
    },[])

    if(user === undefined){
     return <div>Loading...</div>; 
     }

     if(!user){
       return <Navigate to={"/login"} replace />;
     }
     return children;
    
}

export default ProtectedRoute
