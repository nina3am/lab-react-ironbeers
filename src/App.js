import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
