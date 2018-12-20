import React, { Component } from "react";
import "../Home/Home.css";

class Portfolio extends Component {
  
    render() {
      return (
        <div className="container body">
          <div className="row jumbo">
            <div className="col-md">
              <h1 className="display-3 text-white">Michael Rodriguez</h1>
              <p className="lead text-white">Full-Stack Web Developer</p>
              <p className="lead text-white">Berkeley, California</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md">
              here would be a picture of a website
            </div>
            <div className="col-md">
              and here would be a description?
            </div>
            
          </div>
          
        </div>
      );
    }
  }
  
export default Portfolio;
  