import React, { Component } from 'react';
import { Container, Row, Col, Button, Input } from 'react-materialize';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { getCurrentProfile, changeProfile } from '../actions/profileActions';
import Loader from './Loader';
import CustomProfileInput from './CustomProfileInput';

class MyProfile extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  };

  onSubmit = async formData => {
    // We need to call some action creator that will contact backend server
    await this.props.changeProfile(formData);
    if (!this.props.errorMessage) {
      this.props.history.push('/search');
    }
  };

  render() {
    const { user } = this.props.auth;
    const { profile, loading, errorMessage } = this.props.profile;
    // Check if the existing profile has loaded, then initialize Redux form with those values
    
    let loader, myprofileContent, profileTemplate;

    if (profile !== null) {
      profileTemplate = 
      <div className='register-card' style={{width: '100%', marginTop: '5%', padding: '5%'}}>
        <div className="profile-form" >
          <Row>
            <Col m={3} l={3}>
              <div className="user-avatar">
                <img src={user.avatar} />
              </div>
            </Col>
            <Col s={9}>
              <Input
                disabled
                name="name" 
                type="text" 
                id="profile_name" 
                label="Your name"
                defaultValue={user.name + ' (cannot be changed)'} 
                s={11}
              />
              <Input
                disabled 
                name="email" 
                type="text" 
                id="profile_email" 
                label="Email" 
                defaultValue={user.email + ' (cannot be changed)'} 
                s={11} 
              /> 
              <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field 
                  name="handle" 
                  type="text" 
                  id="profile_handle" 
                  placeholder="must not contain special characters except underscores"
                  label="Username"
                  defaultValue={profile.handle}
                  s={11} 
                  component={CustomProfileInput} 
                />
                <Field 
                  name="company" 
                  type="text" 
                  id="profile_company" 
                  label="Your company"
                  defaultValue={profile.company} 
                  s={11} 
                  component={CustomProfileInput} 
                />
                <Field 
                  name="website" 
                  type="text" 
                  id="profile_website" 
                  label="Your website"
                  defaultValue={profile.website}  
                  s={11}
                  component={CustomProfileInput} 
                />
                { errorMessage ? 
                  <p className="col s11" style={{color: 'red', fontSize: '16px'}}>
                    { errorMessage }
                  </p>
                : null}
                <Button 
                  className="header-button" 
                  onClick={this.props.history.goBack} 
                  style={{
                    float: 'right', 
                    marginRight: '10%', 
                    width: '150px',
                    background: 'none',
                    backgroundColor: 'grey'
                  }}>
                  Back
                </Button>
                <Button 
                  className="header-button" 
                  type="submit" 
                  style={{
                    float: 'right', 
                    marginRight: '2%', 
                    width: '200px'
                  }}>
                  Save Changes
                </Button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    }

    if (profile === null || loading ) {
      loader = <Loader />;
      myprofileContent = null;
    } else if (Object.keys(profile).length === 0 || errorMessage) {
      // In case current user does not have a profile
      loader = <div className="no-profile-warning">Please set up your profile</div>;
      myprofileContent = profileTemplate;
    } else {
      loader = null;
      myprofileContent = profileTemplate;
    }

    return (
      <div className="my-profile">
        { loader }
        <Container>
          { myprofileContent }
        </Container>
      </div>
    );
  }
}

// linking backend props to frontend state
const mapStateToProps = state => {
  return {
    profile: state.profile,
    auth: state.auth,
    errorMessage: state.profile.errorMessage,
    initialValues: state.profile.profile
  }
};

MyProfile = reduxForm({
  form: 'UsersShowForm',
  enableReinitialize: true
})(MyProfile);

MyProfile = connect(
  mapStateToProps, { getCurrentProfile, changeProfile }          
)(MyProfile);

export default MyProfile;