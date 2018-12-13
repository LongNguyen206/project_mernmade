import React, { Component } from "react";
import { Col, Card, CardTitle } from 'react-materialize';
import ReactStars from 'react-stars';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, Link } from "react-router-dom";

import RoundLoader from './RoundLoader';
import { shortlist } from '../actions/accountActions';

class AccountCard extends Component {
  onClick = async (handle) => {
    await this.props.shortlist(handle);
  };

  render () {
    let icon, followerCount, savedIcon, truncateDesc, rate, cardContent;
    const { account } = this.props;
    const { profile } = this.props.profile;
    
    if ((account === null) || (profile === null)) {
      cardContent = 
      <Card horizontal style={{height: '250px'}}>
        <div style={{padding: '20% 40%'}}>
          <RoundLoader />
        </div>
      </Card>
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
      }
    
      if (account.followers < 1000) {
        followerCount = followerStr
      } else if (account.followers < 1000000) {
        followerCount = (followerStr.slice(0 ,-3)) + '.' + (followerStr[followerStr.length-3]) + 'k'
      } else {
        followerCount = (followerStr.slice(0 ,-6)) + '.' + (followerStr[followerStr.length-6]) + 'm'
      } 

      if (this.props.saved === true) {
        savedIcon = <i title="Remove from saved" className="fas fa-bookmark fas-card"></i>
      } else {
        savedIcon = <i title="Save this account" className="far fa-bookmark far-card"></i>
      }

      if (account.description.length > 50) {
        truncateDesc = account.description.substr(0,50) + '...'
      } else {
        truncateDesc = account.description
      }

      if (account.averageRate) {
        rate = <p style={{ textAlign: 'left', width: '300px'}}>{account.averageRate.toFixed(1)}/5 ({account.numberOfReviews} reviews)</p>
      } else {
        rate = <p>No reviews</p>
      }
      
      cardContent = 
        <Card horizontal header={<CardTitle image={account.picture}></CardTitle>}>
          <div className='pre-card-divider'>
            <p className="card-accountname"><a href={account.link} target="_blank" rel="noopener noreferrer">{account.accountName}</a></p>
            <p className="card-follower-count" title={account.followers}>{icon} {followerCount}</p>
            <p className="card-industry">{account.industry}</p>
            <Link to={`/account/${account.handle}`}><p className="card-account-desc">{truncateDesc}</p></Link>
          </div>
          <div className="post-card-divider">
            <hr style={{marginTop: '30px'}} />
            <div className="card-account-type">
            <p style={{ fontSize: '15px', fontWeight: '500'}}>{account.accountType}</p>
            <p>
                <ReactStars
                    count={5}
                    size={20}
                    color2={'#ffd700'}
                    value={account.averageRate}
                    edit={false}
                    className="review-stars-summary"
                />
                </p>
              {rate}
            </div>
            <a className="card-saved-icon" onClick={this.onClick.bind(this, account.handle)}>{savedIcon}</a>
          </div>
        </Card>
    }

    return (
      <Col m={7} s={12}>
        {cardContent}
      </Col>
    )
  }
}

export default compose(
  withRouter,
  connect(null, { shortlist })
)(AccountCard);