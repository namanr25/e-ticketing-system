import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';

const App = () => {
  return <>
    <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            {/* <Route path="/events" element={<Events/>}/> */}
            {/* <Route path="/profile" element={<Home/>}/> */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </Router>
  </>
}

export default App