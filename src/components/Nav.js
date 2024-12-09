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
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>

      </nav>
    </div>
  )
}

export default Nav;
