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
        <Link to="/notes" >Notes</Link>
      </div>
      <div>
        <Link to="/add" >Add Notes</Link>
      </div>
      <div>
        <Link to="/edit" >Edit Notes</Link>
      </div>
      <div>
        <Link to="/delete" >Delete Notes</Link>
      </div>
     
    </header>
  )
}