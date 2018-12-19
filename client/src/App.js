import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import notFound from "./pages/404/";
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
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }
        }>
      <Router>
        <div className="container-fluid pos-f-t">
          
          <nav className="d-flex sticky-top justify-content-between navbar navbar-dark bg-dark">
            <div className="navbar-brand">Logo here</div>
            
            <div className="nav-item">
              <h2 className="nav-link" id="name">Michael Rodriguez</h2>
            </div>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
          </nav>

          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <h4 class="text-white">Various links here *smile*</h4>
              <span class="text-muted">Toggleable via the navbar brand.</span>
              <p><Link to="/">Home</Link></p>
              <p><Link to="/portfolio/">Portfolio</Link></p>
              <p><Link to="/poop/">Poop</Link></p>
            </div>
          </div>

          
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio/" component={Portfolio} />
            <Route path="/poop/" component={Poop} />
            <Route component={notFound} />
            
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;


{/* <div id="navbar NavDropdown">
              <div className="navbar-nav">
                
                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    
                  </div>
                </div>
              </div>
            </div> */}