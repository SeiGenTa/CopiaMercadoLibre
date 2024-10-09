import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";

import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import Index from "./pagesV2/index";
import SearchPage from "./pagesV2/searcher";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<Navigate to={"/"} />} />
          <Route path="/search/:name" element={<SearchPage/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer stacked />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
