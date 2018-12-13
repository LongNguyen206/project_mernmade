import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";

import { shortlist } from '../actions/accountActions';

class AccountReviewItem extends Component {
    render () {
        const { review } = this.props;   
        let date = new Date(review.reviewDate);
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var year = date.getUTCFullYear(); 
        const newdate = day + "/" + month + "/" + year;
        return (
            <div className='review-item-card' style={{width: '100%', height: '100%', padding: '2%'}}>
                <div className="profile-form" >
                <Row>
                    <Col m={3} l={3} style={{minWidth: '250px'}}>
                            <img src={review.reviewUserAvatar} />
                            <div style={{textAlign: 'center'}}>
                                <ReactStars
                                    count={5}
                                    size={35}
                                    color2={'#ffd700'}
                                    value={review.reviewRate}
                                    edit={false}
                                    className="review-stars"
                                />
                                <b style={{fontSize: '25px', marginRight: '25px'}}>{review.reviewRate}/5</b>
                            </div>
                    </Col>
                    <Col m={9} l={9}>
                        <Row style={{float: 'right', width: '100%', textAlign: 'right'}}>
                            <p>Reviewed on {newdate}</p>
                            <p>by {review.reviewUserName}</p>
                        </Row>
                        <Row style={{margin: '10px 10px 10px 40px'}}>
                            <p className="review-body">{review.reviewText}</p>
                        </Row>
                    </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

// linking backend props to frontend state
const mapStateToProps = state => {
    return {
        auth: state.auth,
        errorMessage: state.auth.errorMessage
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, { shortlist })
)(AccountReviewItem);