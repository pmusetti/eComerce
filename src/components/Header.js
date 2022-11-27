import React from 'react';
import NavBar from './NavBar';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id='header'>
      <Link to="/" id='logo'>
        <h1 >Delivery</h1>
      </Link>
      <NavBar />
    </div>
  )
}

export default Header
