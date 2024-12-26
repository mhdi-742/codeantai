import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Leftbanner from './components/Leftbanner'
import './App.css'
import Mainarea from './components/Mainarea'
import Home from './home'
import Signin from './components/Signin'
import {Routes,Route, useParams } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path='*' element={<div>error 404 </div> } ></Route>
      </Routes>
    </div>
  );
}

export default App;