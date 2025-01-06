import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";
import dishes from "../dishesData";
import vespa from "../images/vespa.svg";
import { fetchAPI, submitAPI } from "./api";
import { useNavigate } from "react-router-dom";


export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.payload);
    default:
      return state;
  }
}

function Main({ showBookingForm, setShowBookingForm }) {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], () => initializeTimes());
  const navigate = useNavigate()

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      setShowBookingForm(false)
      navigate("/confirmed"); // Navigate to the confirmation page
    } else {
      alert("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="container">
      {showBookingForm && (
        <div>
          {/* Booking Form props */}
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
          <button onClick={() => setShowBookingForm(false)}>Go Back</button>
        </div>
        )}

        <main className="App-main">
          <h1 className="markazi-text-medium">This week's specials!</h1>
          <Link to="/order-online" className="link-button">
            <button>Online Menu</button>
          </Link>

          {/* Cards */}
          <div className="card-wraper">
            {dishes.map((dish) => (
              <div key={dish.id} className="card-items">
                <img src={dish.image} alt={dish.title} className="card-image" />
                <div className="card-text">
                  <div className="card-title">
                    <h5>{dish.title}</h5>
                    <b>{dish.price}</b>
                  </div>
                  <div className="card-description">
                    <p>{dish.description}</p>
                  </div>
                  <div className="order">
                    <h5>{dish.order}</h5>
                    <img src={vespa} alt="deliver logo" className="vespa" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
    </div>
  );
}

export default Main;
