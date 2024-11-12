import React from "react";
import logo from "../icons_assets/Logo .svg"

function Nav() {
  return(
    <div className="container">
      <nav className="App-nav">
        <div className="App-logo">
          <img src={logo} alt="logo" />
        </div>
          <ul className="">
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="reservations.html">Reservations</a></li>
            <li><a href="order-online.html">Order Online</a></li>
            <li><a href="login.html">Login</a></li>
          </ul>

      </nav>
    </div>
  )
}

export default Nav;
