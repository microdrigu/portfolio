import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Me from "./../../imgs/me.png"
import "./Home.css"

class Home extends Component {
  
  render() {
    return (
      <div className="container body">
        <div className="row">
          <img src={Me} alt="me *smile*"></img>
        </div>
        <div className="row">
          <div className="col-sm">
            <p>where will this be and will the background be white????</p>
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default Home;