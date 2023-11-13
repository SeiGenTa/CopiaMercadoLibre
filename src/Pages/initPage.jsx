import { useState } from 'react'
import './initPageCss.css'
import TopBar from './Components/TopBar'
import SeconBar from './Components/secondBar'
import Recommendation from './Components/Recommendation.jsx'
import OnSale from './Components/Oferts'
import PromoModePay from './Components/PromoModePay.jsx'

function App() {
  return (
    <>
      <TopBar></TopBar>
      <div style={{height:"60px"}}></div>
      <SeconBar/>
      <OnSale/>
      <PromoModePay/>
      <Recommendation/>
    </>
  )
}

export default App
