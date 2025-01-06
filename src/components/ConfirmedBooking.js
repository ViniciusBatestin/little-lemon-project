import React from 'react';
import { useNavigate } from 'react-router-dom';
// import 'App.css'; // Import the CSS file

function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <div className="confirmed-booking">
      <h1>Booking Confirmed!</h1>
      <p>Thank you for reserving a table with us. We look forward to serving you!</p>
      <button
        onClick={() => navigate('/')}
        className="back-to-home-btn"
      >
        Back to Home
      </button>
    </div>
  );
}

export default ConfirmedBooking;
