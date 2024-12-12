import React, {useState, useEffect} from "react";
import logo from "../images/Logo .svg"
import hamb from "../images/🦆 icon _hamburger menu.svg"

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0)

  const toogleMenu = () => {
    setMenuOpen(!menuOpen)
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNav(false)
        // console.log("nav Hidden")
      }else {
        setShowNav(true)
        // console.log("nav show")
      }
      setLastScrollY(currentScrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll)
  },[lastScrollY])

  return(
    <div className="container">
      <nav className={`App-nav ${showNav ? "nav-visible" : "nav-hidden" } ${menuOpen ? "open" : ""}`}>
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
            <li><a href="/booking">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>

      </nav>
    </div>
  )
}

export default Nav;
