import React from "react";
import logo from "../images/logo2.png"

function Footer() {
  return (
    <div className="container">
      <footer className="App-footer">
        <img src={logo} alt="Logo" className="App-footer-logo" />
        <ul>
            <h3 className="karla-regular"><strong>Doormat <br/> navigation</strong></h3>
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="reservations.html">Reservations</a></li>
            <li><a href="order_online.html">Order Online</a></li>
            <li><a href="login.html">Login</a></li>
        </ul>

        <ul>
          <h3 className="karla-regular"><strong>Contact</strong></h3>
          <li><strong>Phone number:</strong> (123) 456-7890.</li>
          <li><strong>Email:</strong> info@littlelemon.com.</li>
          <li><strong>Address:</strong> Las Ramblas, Barcelona.</li>

        </ul>

        <ul>
          <h3 className="karla-regular"><strong>Social Media</strong></h3>
          <li><a href="instagram">Instagram</a></li>
          <li><a href="Facebook.html">Facebook</a></li>
          <li><a href="tiktok.html">TikTok</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;
