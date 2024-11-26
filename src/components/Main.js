import React from "react";
import  {Link} from "react-router-dom"
import dishesData from "./DishesData";

function Main() {
  return (
    <div className="container">
      <main className="App-main">
        <h1 className="markazi-text-medium">This weeks specials!</h1>
        <Link to="/order-online" className="link-button">
          <button >Online Menu</button>
        </Link>
      </main>
    </div>


  )
}

export default Main;
