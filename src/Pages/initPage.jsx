import { useState } from 'react'
import './initPageCss.css'
import TopBar from './Components/TopBar'
import SeconBar from './Components/secondBar'
import Recommendation from './Components/recommendation'
import OnSale from './Components/Oferts'

function App() {
  return (
    <>
      <TopBar></TopBar>
      <div style={{height:"60px"}}></div>
      <SeconBar/>
      <OnSale/>
      <Recommendation/>
    </>
  )
}

export default App
