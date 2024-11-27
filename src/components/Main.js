import React from "react";
import  {Link} from "react-router-dom"
import dishes from "../dishesData";

function Main() {
  return (
    <div className="container">
      <main className="App-main">
        <h1 className="markazi-text-medium">This weeks specials!</h1>
        <Link to="/order-online" className="link-button">
          <button >Online Menu</button>
        </Link>

        {/* cards */}
        <div className="card-wraper">
            {
              dishes.map(dishe => <div key={dishe.id} className="card-items">
                <img src={dishe.image} alt={dishe.title} className="card-image"/>
                <div className="card-text">
                  <div>
                    <h5>{dishe.title}</h5>
                    <b>{dishe.price}</b>
                  </div>
                  <p>{dishe.description}</p>
                  <h5>{dishe.order}</h5>
                </div>
              </div>)
            }
        </div>
      </main>
    </div>
  )
}

export default Main;
