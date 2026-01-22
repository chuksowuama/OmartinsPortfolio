import { useEffect } from "react"
import Portfolio from "./Portfolio"
import { Links, Route, Routes, useLocation } from "react-router-dom"
import Login from "./Login"
import Admin from "./Adminfolder/Admin"
import ProtectedRoute from "./ProtectedRoute"
import { useDispatch } from "react-redux"
import { ListenerAuth } from "./Authlistener"

function App() {
const dispatch=useDispatch()
const location=useLocation()

useEffect(()=>{
  if(location.pathname.startsWith("/admin")){
    const unsubscribe = ListenerAuth(dispatch);
    return () => unsubscribe();
  }
},[dispatch,location.pathname])
  return (
    <>
    {/* //netlify form handleDeleteCertification */}
        <form name="contact" data-netlify="true" hidden>
        <input type="text" name="fullname" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
    <Routes>
      <Route path="/" element={<Portfolio/>}/>
      <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
