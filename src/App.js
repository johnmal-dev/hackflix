import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {}, []);
  return (
    <div className='App'>
      <h1>Hackflix</h1>
    </div>
  );
}

export default App;
