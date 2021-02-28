import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  useEffect(() => {
    axios.get('http://localhost:1337/projects').then(response => {
      console.log(response.data);
    });
  }, []);


  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
