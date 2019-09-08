import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component{
    render(){
      return  (<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Wealth Management Portal</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
          <NavLink activeClassName="active" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink activeClassName="active" to="/line_chart">Line Chart</NavLink>
          </li>
          <li className="nav-item">
          <NavLink activeClassName="active" to="/pie_chart">Pie Chart</NavLink>
          </li>
        </ul>
      </div>
    </nav>)
    }
}


export default Navbar;
