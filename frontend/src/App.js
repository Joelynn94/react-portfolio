import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    axios.get('http://localhost:1337/projects').then(response => {
      console.log(response.data);
    });
  }, []);


  return (
    <div className="App">
      <h1>Portfolio goes here</h1>
    </div>
  );
}

export default App;
