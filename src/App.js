import React from 'react';
import logo from './logo.svg';
import Beers from './components/beers'
import BeerDetails from './components/BeerDetails'

import './App.css';
import Homepage from './components/Homepage';


import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/beers' component={Beers} />
        <Route exact path='/beers/:id' component={BeerDetails} />

      </Switch>
    </div>
  );
}

export default App;
