import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";

import * as actions from '../actions/authActions';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
        this.props.history.push('/search');
    }
  }

  render() {
    return (
        <h1 className="blocktext"> 
          Hi, we're HASHTAG HOUND. <br />
          <span>A curated open database of influencers and feature accounts</span>
        </h1>
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