import React, { Component } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

import axios from 'axios'
const initialState={
    name:'',
    tagline:'',
    description:'',
    first_Brewed:'',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by:''
}

export default class NewBeer extends Component {
    state={
        ...initialState
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        const {name, tagline, description, first_Brewed, brewers_tips, contributed_by }  = this.state;
        const attenuation_level=Number(this.state.attenuation_level)
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {name, tagline, description, first_Brewed, brewers_tips,attenuation_level, contributed_by})
        .then( () => {
            // this.props.getData();
            this.setState({...initialState});
        })
        .catch( error => console.log(error) )
      }
    
      handleChange = (event) => {  
          const {name, value} = event.target;
          console.log([name], [value])
          this.setState({[name]: value});
      }
    
    render() {
        
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label><input type='text' name='name' value={this.state.name} onChange={(e)=>this.handleChange(e)} /> Name </label>
                <label><input type='text' name='tagline' value={this.state.tagline} onChange={this.handleChange} /> Tagline </label>
                <label><input type='textarea' name='description' value={this.state.description} onChange={this.handleChange} /> Description </label>
                <label><input type='text' name='first_Brewed' value={this.state.first_Brewed} onChange={this.handleChange} /> First Brewed </label>
                <label><input type='text' name='brewers_tips' value={this.state.brewers_tips} onChange={this.handleChange} /> brewers Tips </label>
                <label><input type='number' name='attenuation_level' value={this.state.attenuation_level} onChange={this.handleChange} /> Attenuation Level </label>
                <label><input type='text' name='contributed_by' value={this.state.contributed_by} onChange={this.handleChange} /> Contributed By </label>
                <button>Add New</button>
            </form>
        )
    }
}
