import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import notFound from "./pages/404";
import Background from "./imgs/cool.png";
import Footer from "./components/Footer"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

const Poop = () => <div className="body"><h4>POOPERS</h4></div>;

class App extends Component {
  render() {
    return (
      <div className="Body" 
        style = {
          { 
            backgroundImage: 'url(' + Background + ')', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'repeat-y'
          }
        }>
      <Router>
        <div className="container-fluid">
          
          <nav className="d-flex sticky-top justify-content-between navbar">
            <div className="navbar-brand"><Link className="link" style={{ textDecoration: 'none' }} to="/">Michael Rodriguez</Link></div>
            
            {/* <div className="nav-item">
              <h2 id="name"></h2>
            </div> */}
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon id="bars" icon="bars" />
            </button>
            
          </nav>

          <div className="collapse makeGrey" id="navbarToggleExternalContent">
            <div className="justify-content-end p-3">
              <p className="navbar-toggler noWeb" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><Link className="link" style={{ textDecoration: 'none',  }} to="/">About Me</Link></p>
              <p className="navbar-toggler noWeb" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><Link className="link" style={{ textDecoration: 'none' }} to="/portfolio">Portfolio</Link></p>
              <p className="navbar-toggler noWeb" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><Link className="link" style={{ textDecoration: 'none' }} to="/poop">Poop</Link></p>
            </div>
          </div>

          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/poop" component={Poop} />
            {/* Heroku has their own 404 page, but here's one anyway */}
            <Route component={notFound} />
          </Switch>
        </div>
      </Router>
      <Footer />
      </div>
    );
  }
}

export default App;