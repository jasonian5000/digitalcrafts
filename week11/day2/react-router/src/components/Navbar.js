import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Product">Product</Link>
    </div>
  );
}
