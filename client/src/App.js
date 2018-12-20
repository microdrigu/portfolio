import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import notFound from "./pages/404";
import Background from "./imgs/cool.png";
// const Home = () => <h2>Home</h2>;
// const About = () => <h1>HEY BB IS ME</h1>;
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
            <div className="navbar-brand text-white">Michael Rodriguez</div>
            
            {/* <div className="nav-item">
              <h2 id="name"></h2>
            </div> */}
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
          </nav>

          <div className="collapse makeGrey" id="navbarToggleExternalContent">
            <div className="justify-content-end p-3">
              <p className="navbar-toggler noWeb" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><Link to="/">Home</Link></p>
              <p className="navbar-toggler noWeb" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><Link to="/portfolio">Portfolio</Link></p>
              <p className="navbar-toggler noWeb" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"><Link to="/poop">Poop</Link></p>
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
      </div>
    );
  }
}

export default App;