import React, { useState } from "react";
import { lazy,Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Appbar from './components/Appbar/Appbar.jsx';
import Home from "./components/Home/Home.jsx";
const Experience=lazy(()=>import('./components/Courses/Courses.jsx'))
import Footer from "./components/Footer/Footer.jsx";
import { createContext } from "react";
import Signup from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";

export const ThemeContext=createContext(null);

function App() {
  const [theme,setTheme]=useState("dark");

  const toggleTheme=()=>{
    setTheme((curr)=>curr==="dark"?"light":"dark")
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className="App" id={theme}>
    <BrowserRouter>
    <Appbar />
    <Suspense key={theme} fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/courses" element={<Experience />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
      </Suspense>
    </BrowserRouter>
    <Footer />
    </div>
    </ThemeContext.Provider>
  )
}

export default App
