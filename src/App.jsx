import { useState } from 'react'
import './App.css'
import Wall from './Components/wall/wall'
import SideMenu from './Components/sideMenu/sideMenu'

function App() {
  
  return (
    <>
       <div className='mainPage'>
       <SideMenu />
       <Wall />
       </div>
    </>
  )
}

export default App
