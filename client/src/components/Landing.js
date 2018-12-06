import React, { Component } from 'react';
import '../styling/Landing.css'




class Landing extends Component {
  render() {
    return (
      <div className="container4">
        <h1 className="blocktext"> Hi, we're hashtag  hound. <br />
        <span>Curated open database  of influencers and feature accounts</span> </h1>

        <div className="drop-image">
         <img className="info-image" src={require('../img/influencer.png')} />
        </div>
      </div>
    );
  }
}

export default Landing;
