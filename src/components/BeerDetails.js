import React, { Component } from 'react'

import axios from 'axios'
import Navbar from './Navbar' 
import { Link } from 'react-router-dom';


export default class BeerDetails extends Component {
    state={
        beer:[]
    }
    getBeer = () =>{
        const { params } = this.props.match;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
        .then(responseFromApi => {
          this.setState({
            beer: responseFromApi.data
          })
        })
      }
    
      componentDidMount() {
        this.getBeer();
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
