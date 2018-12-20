import React, { Component } from "react";
import Me from "./../../imgs/me.png";
import Github from "./../../imgs/github.png"
import Linkedin from "./../../imgs/linkedin.png"
import "./Home.css";

class Home extends Component {
  
  render() {
    return (
      <div className="container body">
        <div className="row">
          <div className="col-md">
            <p></p>
            <img id="me" src={Me} alt="me *smile*" />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <p>Full-Stack Web Developer based in Berkeley, CA. Active gamer and martial artist looking for new challenges in web development!</p>
          </div>
          
        </div>
        <div className="row justify-content-center">
          <div className="col-xs">
            <a href="https://github.com/microdrigu"><img className="icon" src={Github} alt="github" /></a>
          </div>
          <div className="col-xs">
            <a href="https://linkedin.com/in/microdrigu/"><img className="icon" src={Linkedin} alt="linkedin" /></a>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Home;
