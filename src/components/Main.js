import React, {useReducer}from "react";
import  {Link} from "react-router-dom"
import BookingForm from "./BookingForm";
import dishes from "../dishesData";
import vespa from "../images/vespa.svg"


function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
 }

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
}

function Main() {

  const [availableTimes, dispatch] = useReducer(updateTimes,[], initializeTimes)


  return (
    <div className="container">

      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />

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
                  <div className="card-title">
                    <h5>{dishe.title}</h5>
                    <b>{dishe.price}</b>
                  </div>
                  <div className="card-description">
                    <p>{dishe.description}</p>
                  </ div>
                  <div className="order">
                    <h5>{dishe.order}</h5>
                    <img src={vespa} alt="deliver logo" className="vespa"/>
                  </div>
                </div>
              </div>)
            }
        </div>
      </main>
    </div>
  )
}

export default Main;
