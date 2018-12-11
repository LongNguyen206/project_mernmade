import React, { Component } from 'react';
import { Row, Button } from 'react-materialize';
import { reduxForm, Field, reset } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";

import { addReview } from '../actions/accountActions';
import CustomProfileInput from './CustomProfileInput';
import CustomStarInput from './CustomStarInput';

class ReviewForm extends Component {
    onSubmit = async (formData) => {
        console.log('submitting', formData, this.props.account._id)
        // We need to call some action creator that will contact backend server
        await this.props.addReview(this.props.account._id, formData);
        if (!this.props.errorMessage) {
            console.log('success', this.props.reviewed)
            this.props.reset('review');        
        }
    };

    render () {
        return (
            <div className='review-card'>
                <div className="review-form" >
                    <h4 className="review-title"> Leave a Review </h4>
                    <Row className="form-row">
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <Field
                                name='reviewRate'
                                count={5}
                                size={35}
                                color2={'#ffd700'} 
                                component={CustomStarInput}
                            />
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
                            
                            <div className="register-btn-container"><Button className="header-button" type="submit">Submit review</Button></div>
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
        reviewed: state.accounts,
        errorMessage: state.accounts.errorMessage
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, { addReview }),
    reduxForm({ form: 'review' })
)(ReviewForm);
