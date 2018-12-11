import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";

import Loader from './Loader';
import { shortlist } from '../actions/accountActions';

class AccountSummary extends Component {
    onClick = async (handle, profile) => {
        await this.props.shortlist(handle);
    };

    render () {
        let summaryContent, icon, followerCount, savedIcon, name, engagement, location, description;
    
        if (this.props.account === null) {
            summaryContent = <Loader />;
        } else {
            let followerStr = this.props.account.followers.toString() ;

            if (this.props.account.platform === 'Instagram') {
                icon = <i className="fab fa-instagram"></i>
            } else if (this.props.account.platform === 'Twitter') {
                icon = <i className="fab fa-twitter"></i>
            } else if (this.props.account.platform === 'Facebook') {
                icon = <i className="fab fa-facebook"></i>
            } else if (this.props.account.platform === 'Youtube') {
                icon = <i className="fab fa-youtube"></i>
            };
        
            if (this.props.account.followers < 1000) {
                followerCount = followerStr
            } else if (this.props.account.followers < 1000000) {
                followerCount = (followerStr.slice(0 ,-3)) + '.' + (followerStr[followerStr.length-3]) + 'k'
            } else {
                followerCount = (followerStr.slice(0 ,-6)) + '.' + (followerStr[followerStr.length-6]) + 'm'
            };

            if (this.props.saved === true) {
                savedIcon = <i title="Remove from saved" className="fas fa-bookmark sum-fas"></i>
            } else {
                savedIcon = <i title="Save this account" className="far fa-bookmark sum-far"></i>
            };

            if (this.props.account.name) {
                name = <p className="sum-name"><b>{this.props.account.name}</b></p>
            } else {
                name = null;
            };

            if (this.props.account.engagement) {
                engagement = <p className="sum-engage">Engagement rate: <b>{this.props.account.engagement}</b></p>
            } else {
                engagement = null;
            };

            if (this.props.account.location) {
                location = <p className="sum-location"><i className="fas fa-map-marker-alt sum-loc"></i>{this.props.account.location}</p>
            } else {
                location = null;
            };

            if (this.props.account.description) {
                description = <p className="sum-account-desc">{this.props.account.description}</p>
            } else {
                description = null;
            };

            summaryContent = 
                <div className='register-card' style={{width: '100%', padding: '5%'}}>
                    <div className="profile-form" >
                        <Row>
                            <Col m={6} l={6}>
                                <div className="account-picture">
                                    <img src={this.props.account.picture} />
                                </div>
                            </Col>
                            <Col l={6}>
                                <div className="account-info">
                                    <div className='pre-summary-divider'>
                                        <p className="sum-accountname" style={{fontSize: '30px', margin: '1rem 0'}}>
                                            <a href={this.props.account.link} target="_blank">{this.props.account.accountName}</a>
                                        </p>
                                        {name} 
                                        <p className="sum-follower-count" title={this.props.account.followers} style={{fontSize: '30px', margin: '1rem 0'}}>{icon} {followerCount}</p>
                                        {engagement}
                                        <p className="sum-account-type">Status: <b>{this.props.account.accountType}</b></p>
                                        <p className="sum-industry">Industry: <b>{this.props.account.industry}</b></p>
                                        {location}
                                        <p>
                                        <ReactStars
                                            count={5}
                                            size={35}
                                            color2={'#ffd700'}
                                            value={this.props.account.averageRate}
                                            edit={false}
                                            className="review-stars-summary"
                                        /></p>
                                        <br />
                                        <br />
                                        <p style={{fontSize: '15px', textAlign: 'right', marginTop: '0'}}>(based on {this.props.account.numberOfReviews} reviews)</p>
                                    </div>
                                </div>
                                <a className="sum-saved-icon" onClick={this.onClick.bind(this, this.props.account.handle)}>{savedIcon}</a>
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