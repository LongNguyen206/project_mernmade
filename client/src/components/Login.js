import React, { Component } from 'react';
import { Button, Row } from 'react-materialize';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';

import * as actions from '../actions';
import CustomInput from './CustomInput';



class Login extends Component {
    constructor(props) {
        super(props);
    };

    onSubmit = async formData => {
        // We need to call some action creator that will contact backend server
        await this.props.login(formData);
        if (!this.props.errorMessage) {
            window.location.reload();
            this.props.history.push('/search');
        }
    };

    responseFacebook = async res => {
        await this.props.oauthFacebook(res.accessToken);
        if (!this.props.errorMessage) {
            window.location.reload();
            this.props.history.push('/search');
        }
    };

    render () {
        return (
            <Row>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="email" type="text" id="login_email" label="Enter your email" component={CustomInput} />
                    <Field name="password" type="password" id="login_password" label="Enter your password" component={CustomInput} />
                    { this.props.errorMessage ?
                    <div className="alert alert-danger">
                        { this.props.errorMessage }
                    </div>
                    : null}
                    <Button type="submit">Sign In</Button>
                </form>
                <FacebookLogin
                    appId="749745868719206"
                    textButton="Facebook"
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    cssClass="waves-effect waves-light btn"
                />
            </Row>
        )
    };
};

// linking backend props to frontend state
const mapStateToProps = state => {
    return {
        errorMessage: state.auth.errorMessage
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(Login);
