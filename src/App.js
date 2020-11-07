import React from 'react';
import logo from './logo.svg';
import Beers from './components/beers'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/random-beer'
import NewBeer from './components/NewBeer'

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
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact path='/new-beer' component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
