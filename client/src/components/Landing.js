import React, { Component } from 'react';
import {Row, Col, Button, Input} from 'react-materialize';
import '../styling/Style.css';

class Landing extends Component {
  render() {
    return (
      <div className="container4">
        <h1 className="blocktext">
          Hi, we're Hashtag Hound. <br />
          <span>A curated open database of influencers and feature accounts.</span>
            <Button className="landing-btn" type="submit">View influencers</Button>
       </h1>
       <Row className="second-color">
          <Col s={3}>
          <img className="app-img" src={require('../img/hashappimg.png')} /></Col>
          <Col s={7}>
          <h3 className="app-heading">__Get the app </h3>
          <p className="app-para"> Inspired by the countless hours wasted in search of relevant hashtags and the limited utility of supposedly ‘popular’ hashtags, we decided to develop an alternative - Hashtag Hound, an intuitive app that sniffs out the exact hashtags you're looking for in minutes. </p>
          <img className="itunes-img" src={require('../img/applestore.png')} />
          <img className="google-img" src={require('../img/google-play-badge.png')} />
          </Col>
      </Row>
      <h1 className="faq"> Frequently asked questions </h1>
      <Row>
      <div class="faq-content">
          <div class="faq-question">
              <input id="q1" type="checkbox" class="panel" />
              <div class="plus">+</div>
                <label for="q1" class="panel-title">What is Hashtag Hound?</label>
                <div class="panel-content">Hashtag hound is a social media agency focused around brand growth mainly on Instagram</div>
              </div>

              <div class="faq-question">
                <input id="q2" type="checkbox" class="panel" />
                <div class="plus">+</div>
                <label for="q2" class="panel-title">Are any hidden fees involved?</label>
                <div class="panel-content">No, we only work with verified brands that use our platform for easy access to verified influencers</div>
              </div>

              <div class="faq-question">
                <input id="q3" type="checkbox" class="panel" />
                <div class="plus">+</div>
                <label for="q3" class="panel-title">Why do you have anonymous reviews?</label>
                <div class="panel-content">Some of our partners prefer to remain anonymous and not be seen by other companies we work with</div>
          </div>
        </div>
        </Row>
        <div className="third-color">
        <h1 className="contact-form">Want to Know more? Let's Chat! </h1>

        </div>
      </div>

    );
  }
}

export default Landing;
