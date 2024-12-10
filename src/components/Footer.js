import React from "react";
import logo from "../images/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';


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
          <li><strong>Email:</strong> info@littlelemon.com</li>
          <li><strong>Address:</strong> Las Ramblas, Marcelona</li>

        </ul>

        <ul>
          <h3 className="karla-regular"><strong>Social Media</strong></h3>
          <li>
            <a href="www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a></li>
          <li>
            <a href="www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
          </li>
          <li>
            <a href="tiktok.html">
              <FontAwesomeIcon icon={faTiktok} /> TikTok
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;
