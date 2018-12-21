import React, { Component } from "react";

class portItem extends Component {
    render() {
        return(
            <div className= {String(`row ${this.props.reverse}`)}  >
                <div className="col-md">
                    <a href={this.props.website}><img class="img-fluid port" src={this.props.image} alt="responsive website" /></a>
                </div>
                <div className="col-md">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.blurb}</p>
                </div>
            </div>
        )
    }
}

export default portItem;