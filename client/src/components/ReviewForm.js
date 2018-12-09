import React, { Component } from 'react';
import { Row, Button } from 'react-materialize';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";

import * as actions from '../actions/authActions';
import CustomProfileInput from './CustomProfileInput';

class ReviewForm extends Component {
    componentDidMount() {

    };

    onSubmit = async formData => {
        // We need to call some action creator that will contact backend server
        await this.props.register(formData);
        if (!this.props.errorMessage) {
            this.props.history.push('/myprofile');
        }
    };

    render () {
        return (
            <div className='register-card'>
                <div className="review-form" >
                    <h4 className="register-title"> Leave a Review </h4>
                    <Row className="form-row">
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <Field
                                name='reviewText'
                                placeholder="Write your review..."
                                type="textarea"
                                s={12}
                                component={CustomProfileInput}
                            />
                            { this.props.errorMessage ? 
                                <p className="form-group" style={{color: 'red', fontSize: '13px'}}>
                                    *{ this.props.errorMessage }
                                </p>
                            : null}
                            <div className="register-btn-container"><Button className="" type="submit">Submit review</Button></div>
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
    reduxForm({ form: 'review' })
)(ReviewForm);
