import React from "react";
import restaurantFood from "../images/restauranfood.jpg";

function Header() {
  return (
    <div className="container">
      <header className="App-header">
        <div className="header-text">
          <h1 className="markazi-text-medium">Little Lemon</h1>
          <h2 className="karla-regular">Marcelona</h2>
          <p className="karla-regular">we are a family owned</p>
          <p className="karla-regular">Mediterranean restaurant,</p>
          <p className="karla-regular">focused on traditional</p>
          <p className="karla-regular">recipes served with a modern</p>
          <p className="karla-regular">twist.</p>
        </div>

    <div>
        <img src={restaurantFood} alt="restaurant food" className="header-image"/>
    </div>

    <div className="header-button">
        <button>Reserve a Table</button>
    </div>

      </header>
    </div>
  )
}

export default Header;
