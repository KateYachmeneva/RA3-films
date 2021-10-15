import React from 'react';
import Stars from './components/Stars/Stars';
import './App.css';

function App() {
  return (
    <div className="App">
    <Stars count={1} />
    <Stars count={5} />
    <Stars count={'h'} />
    </div>
  );
}

export default App;
