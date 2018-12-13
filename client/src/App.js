import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Background from "./imgs/cool.png";
// const Home = () => <h2>Home</h2>;
const About = () => <h1>HEY BB IS ME</h1>;
const Poop = () => <h4>POOPERS</h4>;

class App extends Component {
  render() {
    return (
      <div className="Body" 
        style = {
          { 
            backgroundImage: 'url(' + Background + ')', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }
        }>
      <Router>
        <div className="container-fluid">
          <nav className="d-flex justify-content-between navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-brand">Logo here</div>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="nav-item">
              <h3 className="nav-link" id="name">microdrigu</h3>
            </div>
            <div id="navbarNavDropdown">
              <div className="navbar-nav">
                
                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/about/">About</Link></p>
                    <p><Link to="/users/">Poop</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Poop} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;