import React, { Component } from "react";
import Port from "../../components/portItem"
import "../Home/Home.css";
import Memory from "../../imgs/memorymapFull.png"
import Equip from "../../imgs/equiprent.jpg"
import Big2 from "../../imgs/big2.jpg"
import Github from "../../imgs/github.png"
import Linkedin from "../../imgs/linkedin.png"

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

          <div className="row forehead">
            <div className="col-md">
            <p>Hello! I'm Michael. Below are some of the projects I have contributed to. </p>
            </div>
          </div>

          <Port image={Memory} website="https://memory-map.github.io/Main/" title="Memory Map" 
          blurb="A visual journal implemented with jQuery, Firebase, CSS and the Google Maps API. It's much like a map you would keep on your wall to pin the places you have been to and any memory you have associated with it.
          Google Maps API is utilized to display a map to user, as well as creating custom points on the map. These custom points hold information about the date created, the exact location, as well as the memory associated with it. 
          All of this information is saved on Firebase. More info can be found" git="https://github.com/memory-map/Main"/>
          
          <Port image={Big2}  website="https://pusoydosbeta.herokuapp.com/" title="Big 2 Card Game" blurb="A card game made completely with JavaScript, featuring a fully functioning multiplayer AI. A single player can play a full game of big 2 on their web browser without the need for any flash plugin.
          This web app is implemented with Express, jQuery, mongoDB and Deck of Cards API. More information can be found" git="https://github.com/Big2CardGame/Big2" /> 
          
          <Port image={Equip} website="https://equiprent.herokuapp.com" title="EquipRent" blurb="A website where users can post their rarely used equipment and RENT them out to other members in their community. 
          Website uses MERN stack, as well as other technologies such as Socket IO (chat), Passport (user authentication), as well as design technologies such as CSS Grid, Flexbox, and Parallax JS. More information can be found" git="https://github.com/EquipRENTAL/Main"/>

          <div className="row justify-content-center linkBot">
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
  
export default Portfolio;