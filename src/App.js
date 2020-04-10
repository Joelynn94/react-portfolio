import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
