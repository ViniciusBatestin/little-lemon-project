import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav'


function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <section id='menu'>
        <Main />
      </section>
      <section id='about'>
        <Footer />
      </section>
      <Routes>
        < Route path='/booking' element={<Header/>} />
      </Routes>
    </Router>
  );
}

export default App;
