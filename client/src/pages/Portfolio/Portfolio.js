import React, { Component } from "react";
import Port from "../../components/portItem"
import "../Home/Home.css";
import Memory from "../../imgs/memorymapFull.png"
import Equip from "../../imgs/equiprentFull.jpg"
import Big2 from "../../imgs/big2.jpg"

class Portfolio extends Component {
  
    render() {
      return (
        <div className="container body">
          
          <div className="row jumbo">
            <div className="col-md">
              <h1 className="display-3 text-white">Michael Rodriguez</h1>
              <p className="lead text-white">Full-Stack Web Developer</p>
              <p className="lead text-white">Berkeley, California</p>
              <p>Hello! I'm Michael. Below are some of the projects I have contributed to. </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              
            </div>
          </div>

          <Port image={Memory} website="https://memory-map.github.io/Main/" title="Memory Map" blurb="here be a description of this great website lol" />
          
          <Port image={Big2} website="https://pusoydosbeta.herokuapp.com/" title="Big 2 Card Game" blurb="A card game made completely with Javascript" /> 
          
          <Port image={Equip} website="https://equiprent.herokuapp.com" title="EquipRent" blurb="helloWorld" />

        </div>
      );
    }
  }
  
export default Portfolio;