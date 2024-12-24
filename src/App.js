import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav'
import BookingForm from './components/BookingForm';


function App() {
  return (
    <Router>
      <Nav />
      <Header />
      {/* the booking form below is rendering twice, i need to decide if it render in App.js or main.js  */}
      {/* <BookingForm /> */}
      <section id='menu'>
        <Main />
      </section>
      <section id='about'>
        <Footer />
      </section>
      <Routes>
        < Route path='/booking' element={<BookingForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
