import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Me from "./../../imgs/me.png"
import "./Home.css"

class Home extends Component {
  
  render() {
    return (
      <div className="container">
        <Helmet bodyAttributes={{ style: 'background-color : #FFFFFF' }} />
        <div className="row">
          <img src={Me} alt="me *smile*"></img>
        </div>
        <div className="row">
          <p>where will this be and will the background be transparent????</p>
        </div>
        
      </div>
    );
  }
}

export default Home;