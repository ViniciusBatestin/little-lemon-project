import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
        <Nav/>
        <Header/>
        <Main/>
        <Footer/>
    </Router>
  );
}

export default App;
