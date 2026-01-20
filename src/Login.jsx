import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReduxLogin } from "./Redux Folder";
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

const Login = () => {
const userData=useSelector((state)=>state.stored.user||null)
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const[loginDetails, setLoginDetails]=useState({
    email:"",
    password:""
  })

  function handleLogin(e){
    const{name,value}=e.target
    setLoginDetails((prev)=>({...prev,[name]:value}))
  }


  async function submitLogin(e){
    e.preventDefault()
    if(!loginDetails.email || !loginDetails.password){
      alert("please fill in all fields")
     return
  }

   try {
    const usercredential= await signInWithEmailAndPassword(auth,loginDetails.email,loginDetails.password)

    const user=usercredential.user
    dispatch(setReduxLogin({
        uid: user.uid,
        email: user.email,
      }))
    navigate("/admin")
   } catch (error) {
    alert("Invalid credentials");
    console.error(error);
   }
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="w-full max-w-md bg-secondary rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Admin Login
        </h1>
        <p className="text-gray-500 mb-8 text-center">
          Enter your credentials to access the admin panel
        </p>
        <form className="space-y-6"  onSubmit={submitLogin}>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="admin@example.com"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              value={loginDetails.email}
              onChange={handleLogin}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              value={loginDetails.password}
              onChange={handleLogin}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-6 text-center">
          Forgot your password?{" "}
          <a href="#" className="text-yellow-400 hover:underline">
            Reset it
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
