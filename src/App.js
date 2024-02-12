import React from "react";
import Home from "./pages/Home";
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom"
import { Routes } from "react-router-dom"
import Register from "./components/register/Register";



function App() {
  return (

   <Router>
    <div>
      <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/register" element= {<Register />}/>
    </Routes>
    </div>
   </Router>
   
    
  )
  
}

export default App;
