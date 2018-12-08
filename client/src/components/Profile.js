import React, { Component } from 'react';
import { Row, Button, Input } from 'react-materialize';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';

import * as actions from '../actions/authActions';
import CustomInput from './CustomInput';
import CustomSelectInput from './CustomSelectInput';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      industry: '',
      company: '',
      website: '',
    }
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    return (
        <div className="profile-form" >
          <Row className="form-row">
              <form>
                <Field name="handle" type="text" id="profile_handle" label="Your handle" defaultValue={(this.touchOnChange===true) ? null : profile.handle} s={12} component={CustomInput} />
                <Field name="industry" id="profile_industry" label="Your industry" s={12} defaultValue={profile.industry} options={[{label: "Food", value: "Foodvalue"}]} component={CustomListInput} />
                <Field name="company" type="text" id="profile_company" label="Your company" s={12} defaultValue={profile.company} component={CustomInput} />
                <Field name="website" type="text" id="profile_website" label="Your website" s={12} defaultValue={profile.website} component={CustomInput} />
                { this.props.errorMessage ? 
                  <p className="form-group" style={{color: 'red', fontSize: '13px'}}>
                      *{ this.props.errorMessage }
                  </p>
                : null}
                <div className="register-btn-container"><Button className="header-button" type="submit">Register</Button></div>
              </form>
          </Row>
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

export default compose(
  withRouter,
  connect(mapStateToProps, actions),
  reduxForm({ form: 'profile' })
)(Profile);