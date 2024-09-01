import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';

// Welcome to my project for technical assignment
// As per given problem Statement, I have made the project
// Backend is fully functional with all types of data retrieval and storage
// Cross checked all the api calls in Postman
// frontend is partially done login page, signup page and home page is done
// But due to very less time, I am not able to complete the axios and hooks part
// i.e. integration part of frontend with backend

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