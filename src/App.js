import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav'
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>

      {/* Conditionally render Header */}
      {!showBookingForm && (
        <Header setShowBookingForm={setShowBookingForm} />
      )}

      {/* Always show Main */}
      <Main showBookingForm={showBookingForm} setShowBookingForm={setShowBookingForm} />

      <Footer />
    </Router>
  );
}

export default App;
