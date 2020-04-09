import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Hero />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
