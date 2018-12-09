import React, { Component } from 'react';
import { Row, Button } from 'react-materialize';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';

import * as actions from '../actions/authActions';
import CustomAuthInput from './CustomAuthInput';

class Register extends Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/search');
        }
    };

    onSubmit = async formData => {
        // We need to call some action creator that will contact backend server
        await this.props.register(formData);
        if (!this.props.errorMessage) {
            this.props.history.push('/myprofile');
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
            <div className='register-card'>
                <div className="register-form" >
                    <h4 className="register-title"> Sign Up </h4>
                    <Row className="form-row">
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <Field 
                                name="name" 
                                type="text" 
                                id="register_name" 
                                label="*Full Name" 
                                s={12} 
                                component={CustomAuthInput}
                                placeholder="Please provide your real name or name of your company" 
                            />
                            <Field 
                                name="email" 
                                type="email" 
                                id="register_email" 
                                label="*Your Email" 
                                s={12} 
                                component={CustomAuthInput}
                            />
                            <Field 
                                name="email2" 
                                type="email" 
                                id="register_email2" 
                                label="*Confirm Your Email"
                                s={12} 
                                component={CustomAuthInput}
                            />
                            <Field 
                                name="password" 
                                type="password" 
                                id="register_password" 
                                label="*Password" 
                                s={12} 
                                component={CustomAuthInput} 
                            />
                            <Field 
                                name="password2" 
                                type="password" 
                                id="register_password2" 
                                label="*Confirm Your Password" 
                                s={12} 
                                component={CustomAuthInput}
                            />
                            { this.props.errorMessage ? 
                                <p className="form-group" style={{color: 'red', fontSize: '13px'}}>
                                    *{ this.props.errorMessage }
                                </p>
                            : null}
                            <div className="register-btn-container"><Button className="header-button" type="submit">Register</Button></div>
                            <p className="helper">* - required</p>
                            <p className="terms">By using this form you agree to our terms of use, privacy policy with the storage and handling of your data by Hashtag Hound.</p>
                            <div className="strike">
                                <span>OR</span>
                            </div>
                            <div className="fb-btn-container">
                                <FacebookLogin
                                    appId="749745868719206"
                                    textButton="  Log in with Facebook"
                                    fields="name,email,picture"
                                    callback={this.responseFacebook}
                                    cssClass="fb-btn"
                                    icon="fa-facebook"
                                />
                            </div>
                        </form>
                    </Row>
                </div>
            </div>
        )
    }
};

// linking backend props to frontend state
const mapStateToProps = state => {
    return {
        auth: state.auth,
        errorMessage: state.auth.errorMessage
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup' })
)(Register);
