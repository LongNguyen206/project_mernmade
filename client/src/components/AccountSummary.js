import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";

import Loader from './Loader';
import { shortlist } from '../actions/accountActions';

class AccountSummary extends Component {
    onClick = async (handle) => {
        await this.props.shortlist(handle);
    };

    render () {
        let summaryContent, icon, followerCount, savedIcon, name, engagement, location, description, rate;
        let { account, saved } = this.props;

        if (account === null) {
            summaryContent = <Loader />;
        } else {
            let followerStr = account.followers.toString() ;

            if (account.platform === 'Instagram') {
                icon = <i className="fab fa-instagram"></i>
            } else if (account.platform === 'Twitter') {
                icon = <i className="fab fa-twitter"></i>
            } else if (account.platform === 'Facebook') {
                icon = <i className="fab fa-facebook"></i>
            } else if (account.platform === 'Youtube') {
                icon = <i className="fab fa-youtube"></i>
            };
        
            if (account.followers < 1000) {
                followerCount = followerStr
            } else if (account.followers < 1000000) {
                followerCount = (followerStr.slice(0 ,-3)) + '.' + (followerStr[followerStr.length-3]) + 'k'
            } else {
                followerCount = (followerStr.slice(0 ,-6)) + '.' + (followerStr[followerStr.length-6]) + 'm'
            };

            if (saved === true) {
                savedIcon = <i title="Remove from saved" className="fas fa-bookmark sum-fas"></i>
            } else {
                savedIcon = <i title="Save this account" className="far fa-bookmark sum-far"></i>
            };

            if (account.name) {
                name = <p className="sum-name"><b>{account.name}</b></p>
            } else {
                name = null;
            };

            if (account.engagement) {
                engagement = <p className="sum-engage">Engagement rate: <b>{account.engagement}</b></p>
            } else {
                engagement = null;
            };

            if (account.location) {
                location = <p className="sum-location"><i className="fas fa-map-marker-alt sum-loc"></i>{account.location}</p>
            } else {
                location = null;
            };

            if (account.description) {
                description = <p className="sum-account-desc">{account.description}</p>
            } else {
                description = null;
            };

            if (account.averageRate) {
                rate = <p style={{fontSize: '15px', textAlign: 'right', marginTop: '0'}}>{account.averageRate.toFixed(1)}/5 ({account.numberOfReviews} reviews)</p>
            } else {
                rate = <p>No reviews</p>
            }

            summaryContent = 
                <div className='register-card' style={{width: '100%', padding: '5%'}}>
                    <div className="profile-form" >
                        <Row>
                            <Col m={6} l={6}>
                                <div className="account-picture">
                                    <img src={account.picture} />
                                </div>
                            </Col>
                            <Col l={6}>
                                <div className="account-info">
                                    <div className='pre-summary-divider'>
                                        <p className="sum-accountname" style={{fontSize: '30px', margin: '1rem 0'}}>
                                            <a href={account.link} target="_blank">{account.accountName}</a>
                                        </p>
                                        {name} 
                                        <p className="sum-follower-count" title={account.followers} style={{fontSize: '30px', margin: '1rem 0'}}>{icon} {followerCount}</p>
                                        {engagement}
                                        <p className="sum-account-type">Status: <b>{account.accountType}</b></p>
                                        <p className="sum-industry">Industry: <b>{account.industry}</b></p>
                                        {location}
                                        <p>
                                        <ReactStars
                                            count={5}
                                            size={35}
                                            color2={'#ffd700'}
                                            value={account.averageRate}
                                            edit={false}
                                            className="review-stars-summary"
                                        /></p>
                                        <br />
                                        <br />
                                        {rate}
                                    </div>
                                </div>
                                <a className="sum-saved-icon" onClick={this.onClick.bind(this, account.handle)}>{savedIcon}</a>
                            </Col> 
                        </Row>
                        <Row>
                            <div className="post-summary-divider">
                                <hr />
                                {description}
                            </div>
                        </Row>
                    </div>
                </div>
        }
        return (
            <div>
                {summaryContent}
            </div>
        )
    }
}
  
export default compose(
    withRouter,
    connect(null, { shortlist })
)(AccountSummary);