import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Leftbanner from './components/Leftbanner'
import './App.css'
import Mainarea from './components/Mainarea'

function Home() {

  return (
    <>
          <div className="total-page">
          <Leftbanner></Leftbanner>
          <Mainarea></Mainarea>
          </div>        
    </>
  )
}

export default Home;
