import React from "react";
import { Link } from 'react-router-dom';
import restaurantFood from "../images/restauranfood.jpg";

function Header({setShowBookingForm}) {
  return (
    <div className="container">
      <header className="App-header">
        <section>
          <div className="header-text">
            <h1 className="markazi-text-medium">Little Lemon</h1>
            <h2 className="karla-regular">Marcelona</h2>
            <p className="karla-regular">We are a family owned</p>
            <p className="karla-regular">Mediterranean restaurant,</p>
            <p className="karla-regular">focused on traditional</p>
            <p className="karla-regular">recipes served with a modern</p>
            <p className="karla-regular">twist.</p>
          </div>

          <div className="header-image" id="header-image">
              <img src={restaurantFood} alt="restaurant food" className="absolute-image"/>
          </div>
        <div>
          <Link to="/Booking" className="header-button">
                 <button onClick={() => setShowBookingForm(true)}>Reserve a Table</button>
          </Link>
        </div>
        </section>
      </header>
    </div>
  )
}

export default Header;
