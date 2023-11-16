import React from 'react'
import ReactDOM from 'react-dom/client'
import App  from './Pages/initPage.jsx'
import './index.css'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";
import MenuInit from './Pages/Menu.jsx';
import Search from './Pages/BusquedaPage.jsx';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MenuInit/>}/>
        <Route path='search/:data_search/:dataCategori/' element={<Search/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);