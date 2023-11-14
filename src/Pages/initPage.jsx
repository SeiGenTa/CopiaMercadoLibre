import './Components/cssStyles/initPageCss.css'
import TopBar from './Components/TopBar'
import SeconBar from './Components/secondBar'
import { Route, Routes } from 'react-router-dom'
import MenuInit from './Menu.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {MenuInit()}> </Route>
      </Routes>
    </>
  )
}

export default App
