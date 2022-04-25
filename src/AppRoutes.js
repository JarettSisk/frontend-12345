import React, { useState, useEffect } from 'react';
import Home from './Home';
import Companies from './Companies';
import Jobs from './Jobs';
import Nav from './Nav';
import Profile from './Profile';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Company from './Company';
import JoblyApi from './api';
import CurrentUserContext from './CurrentUserContext';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const jwt = require('jsonwebtoken');

const AppRoutes = () => {

  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState("");

  // register a new user
  const registerUser = async (FormData) => {
    try {
      const res = await JoblyApi.registerUser(FormData);
      JoblyApi.token = res;
      setToken(res);
      localStorage.setItem('jobly-token', res);
    } catch (error) {
      console.log(error);
    }
  } 

  // login existing user
  const loginUser = async (FormData) => {
    try {
      const res = await JoblyApi.loginUser(FormData);
      JoblyApi.token = res;
      setToken(res);
      localStorage.setItem('jobly-token', res);
    } catch (error) {
      console.log(error);
    }
  } 

  // update user
  const updateUser = async (FormData, username) => {
    try {
      const res = await JoblyApi.updateUser(FormData, username);
      return res;
    } catch (error) {
      console.log(error);
    }
  } 

  // logout
  const logoutUser = () => {
    try {
      setToken("");
      setCurrentUser(null);
      JoblyApi.token = "";
      localStorage.removeItem("jobly-token");
    } catch (error) {
      console.log(error);
    }
  } 

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        // decode the jwt
        const decode = jwt.decode(token);
        const res = await JoblyApi.getUser(decode.username);
        setCurrentUser(res);
      } catch (error) {
        console.log(error);
      }
    }
    
    if (localStorage.getItem("jobly-token")) {
      setToken(localStorage.getItem("jobly-token"));
      JoblyApi.token = token;
      if(token) {
      getCurrentUser()

      }
    }
  }, [token])
  
  // !!We need to add redirects if the visitor trys to acess certain pages without being logged in!!
  return (
    // user context
    currentUser ? 
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter >
        <Nav logoutUser={logoutUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/companies/:handle' element={<Company />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile" element={<Profile updateUser={updateUser} />} />
        </Routes>
      </BrowserRouter>
    </CurrentUserContext.Provider>
    : 
      <BrowserRouter >
        <Nav logoutUser={logoutUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm loginUser={loginUser} />} />
          <Route path="/signup" element={<SignupForm registerUser={registerUser} />} />
        </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes;