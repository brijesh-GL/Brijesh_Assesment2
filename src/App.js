import React from 'react'
import  NavBar  from './Components/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from './Components/Dashboard';
import { useState } from 'react';

import  response from './Components/Data'

import './App.css';
import { Login } from './Components/Login';
import { Error } from './Components/Error';
import { Cart } from './Components/Cart';
import { Book } from './Components/Book';

function App() {
  const [flag,setFlag]=useState(true)
  const handleToggle=()=>{
     setFlag(!flag)
  }
  return (
    <div className="App">
     
       <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
        
          <Route index path="/" element={<Login></Login>}></Route>
         
          {flag &&
          <Route path="/Dashboard" element={<Dashboard response={response}></Dashboard>}></Route>}
          <Route path="/Cart" element={<Cart></Cart>}></Route>
          <Route path="/Books" element={<Book></Book>}></Route>
          <Route path="/login" element={<Login method={handleToggle}></Login>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
