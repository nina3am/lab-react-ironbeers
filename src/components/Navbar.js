import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div style={{height:'60px', backgroundColor:'blueviolet'}}>
        <Link to="/">🏠</Link>
      </div>
    );
  }
}
