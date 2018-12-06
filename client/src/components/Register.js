import React, { Component } from 'react';
import { Row, Button } from 'react-materialize';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FacebookLogin from 'react-facebook-login';
import '../styling/Register.css';

import * as actions from '../actions';
import CustomInput from './CustomInput';

class Register extends Component {
    constructor(props) {
        super(props);
    };

    onSubmit = async formData => {
        // We need to call some action creator that will contact backend server
        await this.props.register(formData);
        if (!this.props.errorMessage) {
            this.props.history.push('/search');
        }
    };

    responseFacebook = async res => {
        await this.props.oauthFacebook(res.accessToken);
        if (!this.props.errorMessage) {
            this.props.history.push('/search');
        }
    };

    render () {
        return (
          <div className="register-form" >
            <h1 className="register-title"> Sign Up </h1>
            <Row className="form-row">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="name" type="text" id="register_name" label="Company Name" component={CustomInput} />
                    <Field name="email" type="text" id="register_email" label="Enter your email" component={CustomInput} />
                    <Field name="password" type="password" id="register_password" label="Enter your password" component={CustomInput} />
                    <Field name="password2" type="password" id="register_password2" label="Confirm Password" component={CustomInput} />
                    <Button className="header-button" type="submit">Register</Button>
                    <p className="terms"> *By using this form you agree to our terms of use, privacy policy with the storage and handling of your data by Hashtag Hound. </p>
                </form>
            </Row>
          </div>
        )
    }
};

// linking backend props to frontend state
const mapStateToProps = state => {
    return {
        errorMessage: state.auth.errorMessage
    }
};

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup' })
)(Register);
