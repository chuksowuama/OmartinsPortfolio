import { useEffect } from "react"
import Portfolio from "./Portfolio"
import { Links, Route, Routes} from "react-router-dom"
import Login from "./Login"
import Admin from "./Adminfolder/Admin"
import ProtectedRoute from "./ProtectedRoute"
import { useDispatch } from "react-redux"
import { ListenerAuth } from "./Authlistener"

function App() {
const dispatch=useDispatch()

useEffect(()=>{
    const unsubscribe = ListenerAuth(dispatch);
    return () => unsubscribe();
},[dispatch])

  return (
    <>
    <Routes>
      <Route path="/" element={<Portfolio/>}/>
      <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
