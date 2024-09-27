import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import Index from "./pagesV2/Index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer stacked />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
