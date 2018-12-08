import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-materialize';

import { getCurrentProfile } from '../actions/profileActions';
import Loader from './Loader';
import Profile from './Profile';

class MyProfile extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  };

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let loader, myprofileContent;
    if (profile === null || loading) {
      loader = <Loader />;
      myprofileContent = null;
    } else if (Object.keys(profile).length === 0) {
      // In case current user does not have a profile
      loader = <div className="no-profile-warning">Please set up your profile</div>;
      myprofileContent = null;
    } else {
      loader = null;
      myprofileContent = <Profile />
    }
    return (
      <div className="my-profile">
        { loader }
        <Container>
          <Row>
            { myprofileContent }
              
          </Row>
        </Container>
      </div>
    );
  }
}

// linking backend props to frontend state
const mapStateToProps = state => {
  return {
      profile: state.profile,
      auth: state.auth
  }
};
export default connect(mapStateToProps, { getCurrentProfile })(MyProfile);