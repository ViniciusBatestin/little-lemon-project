import React from "react";
import restaurantFood from "../images/restauranfood.jpg";

function Header() {
  return (
    <div className="container">
      <header className="App-header">
        <h1 className="markazi-text-medium">Little Lemon</h1>
        <h2 className="karla-regular">Barcelona</h2>
        <p className="karla-regular">we are a family owned</p>
        <p className="karla-regular">Mediterranean restaurant,</p>
        <p className="karla-regular">focused on traditional</p>
        <p className="karla-regular">recipes served with a modern</p>
        <p className="karla-regular">twist.</p>

        <img src={restaurantFood} alt="restaurant food" className="header-image"/>

        <button>Reserver a Table</button>
      </header>
    </div>
  )
}

export default Header;
