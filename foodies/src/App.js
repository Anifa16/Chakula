import React, {useState, useEffect} from 'react';
import Navbar from './component /Navbar';
import About from "./views/About";
import Home from "./views/Home";
import Register from "./views/Register";
import Recipes from "./views/Recipes";
import Login from "./views/Login";
import Cuisine from './views/Cuisine';
import Editprofile from './views/Editprofile';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Post from './views/Post';
import Userprofile from './views/Userprofile';



//need a app fucntion 
export default function App(){
  return(
    <BrowserRouter>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Recipes' element={<Recipes/>} />
          <Route path='/Cuisine' element={<Cuisine/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Post' element={<Post/>} />
          <Route path='/Editprofile' element={<Editprofile/>} />
          <Route path='/Userprofile' element={<Userprofile/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Login' element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
