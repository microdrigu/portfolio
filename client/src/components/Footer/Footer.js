import React, { Component } from "react";
import "../../pages/Home/Home.css";

class Footer extends Component {
    render() {
        return(
            <footer className="footer footbody">
                <div className="container-fluid">
                    <span className="text-muted">
                        &copy; Michael Rodriguez
                    </span>
                </div>
            </footer>
        );
    }
}

export default Footer;