import React, {useState} from "react";
import logo from "../images/Logo .svg"
import hamb from "../images/🦆 icon _hamburger menu.svg"

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toogleMenu = () => {
    setMenuOpen(!menuOpen)
  };

  return(
    <div className="container">
      <nav className={`App-nav ${menuOpen ? "open" : ""}`}>
        <div className="App-logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <img src={hamb} alt="hambuger menu" className="hamb"
          onClick={toogleMenu}
          />
        </div>
          <ul className="karla-regular">
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
