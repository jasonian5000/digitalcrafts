import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductCard from "./components/ProductCard";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About />} />
      <Route path="/Product" element={<Product />} >
        <Route path=":productid" element={<ProductCard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);