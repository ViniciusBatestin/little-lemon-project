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
        <div>
            {
              dishes.map(dishe => <div key={dishe.id}>
                  <h2>{dishe.title}</h2>
              </div>)
            }
        </div>
      </main>
    </div>
  )
}

export default Main;
