import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/profileActions';

class MyProfile extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  };

  render() {
    return (
      <div>
        <h1>My profile</h1>
      </div>
    );
  }
}

// linking backend props to frontend state
const mapStateToProps = state => {
  return {
      profile: state.profile
  }
};
export default connect(mapStateToProps, actions)(MyProfile);