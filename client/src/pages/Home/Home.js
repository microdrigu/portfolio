import React, { Component } from "react";
import Me from "./../../imgs/me.png";
import "./Home.css";

class Home extends Component {
  
  render() {
    return (
      <div className="container body">
        <div className="row">
          <img src={Me} alt="me *smile*"></img>
        </div>
        <div className="row">
          <div className="col-sm">
            <p>This is me, am web dev lel</p>
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default Home;
