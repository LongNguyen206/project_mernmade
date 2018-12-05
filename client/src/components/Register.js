import React, { Component } from 'react';
import { Row, Button } from 'react-materialize';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FacebookLogin from 'react-facebook-login';

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
            this.props.history.push('/');
        }
    };

    responseFacebook = async res => {
        await this.props.oauthFacebook(res.accessToken);
        if (!this.props.errorMessage) {
            this.props.history.push('/');
        }
    };

    render () {
        return (
            <Row>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="name" type="text" id="register_name" label="Full Name" component={CustomInput} />
                    <Field name="email" type="text" id="register_email" label="Enter your email" component={CustomInput} />
                    <Field name="password" type="password" id="register_password" label="Enter your password" component={CustomInput} />
                    <Field name="password2" type="password" id="register_password2" label="Confirm Password" component={CustomInput} />
                    <Button type="submit">Register</Button>
                </form>
            </Row>
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