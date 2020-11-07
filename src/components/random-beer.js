import React, { Component } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

import axios from 'axios'

export default class RandomBeer extends Component {
    state={
        beer:[]
    }
    getRandomBeer = () =>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(responseFromApi => {
          this.setState({
            beer: responseFromApi.data
          })
        })
      }
    
      componentDidMount() {
        this.getRandomBeer();
      }
    render() {
        return (
            <div>
                <Navbar />
                <h1>{this.state.beer.name}</h1> 
                <img src={this.state.beer.image_url} />
                <p> {this.state.beer.tagline}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p> 
            </div>
        )
    }
}
