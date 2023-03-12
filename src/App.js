import React from 'react'
import Home from './components/Home'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import './App.css'
const App = () => {
  return (
    <div className='d-flex'>
      <LeftSide/>
      <Home/>
      <RightSide/>
    </div>
  )
}

export default App