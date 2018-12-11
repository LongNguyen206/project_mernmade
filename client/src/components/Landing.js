import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import { Row, Col, Button } from 'react-materialize';

import * as actions from '../actions/authActions';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
        this.props.history.push('/search');
    }
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div className="landing-hero">
          <h1 className="blocktext">
            Hi, we're Hashtag Hound. <br />
            <span>A curated open database of influencers and feature accounts.</span>
              <Button className="landing-btn" node='a' href="/register">Get Started</Button>
          </h1>
        </div>
        <Row className="second-color">
          <Col s={3}>
            <img className="app-img" src={require('../img/hashappimg.png')} /></Col>
          <Col s={7}>
            <h3 className="app-heading">__Get the app </h3>
            <p className="app-para"> Inspired by the countless hours wasted in search of relevant hashtags and the limited utility of supposedly ‘popular’ hashtags, we decided to develop an alternative - Hashtag Hound App, an intuitive app that sniffs out the exact hashtags you're looking for in minutes. </p>
            <div className="download-icons">
              <a href="https://itunes.apple.com/us/app/hashtag-hound-instagram-tags/id1295130844?mt=8" target="_blank" rel="noopener noreferrer">
                <img id="itunes-img" alt="App Store" src={require('../img/applestore.png')} />
              </a>
              {/* <img id="google-img" alt="Google Play" src={require('../img/google-play-badge.png')} /> */}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
};

// linking backend props to frontend state
const mapStateToProps = state => {
  return {
      auth: state.auth
  }
};

export default compose(
  withRouter,
  connect(mapStateToProps, actions)
)(Landing);
