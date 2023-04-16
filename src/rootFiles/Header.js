import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

export function Header() {
  return(
    <header>
      <div>
        <Link to="" >Home</Link>
      </div>
      <div>
        <Link to="/contact" >Contact</Link>
      </div>
    </header>
  )
}