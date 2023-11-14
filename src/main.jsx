import React from 'react'
import ReactDOM from 'react-dom/client'
import App  from './Pages/initPage.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MenuInit from './Pages/Menu.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: MenuInit(),
    children:[
      {
        path:"search/:name_item",
        element: <p> EN BUSQUEDA :D</p>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);