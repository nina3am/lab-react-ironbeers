import React, { Component } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

import axios from 'axios'

export default class Beers extends Component {
    state={
        listOfBeers:[]
    }
    getAllBeers = () =>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then(responseFromApi => {
          this.setState({
            listOfBeers: responseFromApi.data
          })
        })
      }
    
      componentDidMount() {
        this.getAllBeers();
      }
    render() {
        console.log(this.state.listOfBeers)
        return (
            <div>
                <Navbar />
                {this.state.listOfBeers.map(el=>(
                    <div key={el._id}>
                        <img src={el.image_url}/>
                        <h2><Link to={`/beers/${el._id}`}>{el.name}</Link></h2>
                        <p>{el.tagline}</p>
                        <h3>{el.contributed_by}</h3>
                    </div>
                ))

                }
            </div>
        )
    }
}
