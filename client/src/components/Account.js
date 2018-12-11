import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";

import { getAccountByHandle, shortlist } from '../actions/accountActions';
import { getCurrentProfile } from '../actions/profileActions';
import Loader from './Loader';
import AccountSummary from './AccountSummary';
import AccountReviewFeed from './AccountReviewFeed';
import ReviewForm from './ReviewForm';

class Account extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getAccountByHandle(this.props.match.params.handle);
    };
    this.props.getCurrentProfile();
  }

  render() {
    const { loading, account } = this.props.account;
    const { profile } = this.props.profile;
    let loader, accountContent, saved;    

    if (account === null || loading || profile === null ) {
      loader = <Loader />;
      accountContent = null;
    } else {
      loader = null;
    
      if ((profile.shortlist.length !== 0) && (profile.shortlist.includes(account._id))) {
        saved = true
      } else {
        saved = false
      }
      accountContent = 
      <div>
        <Col m={12} l={6} s={12} style={{marginLeft: '10%'}}>
          <AccountSummary account={account} profile={profile} saved={saved}/>
          <AccountReviewFeed  accountID={account._id} reviews={account.reviews} />
        </Col>
        <Col m={12} l={4} s={12}>
          <ReviewForm account={account}/>
        </Col>
      </div>
    }

    return (
      <Row>
        {loader}
        {accountContent}
      </Row>  
    )
  }
}

// linking backend props to frontend state
const mapStateToProps = state => {
  return {
    profile: state.profile,
    account: state.accounts,
    errorMessage: state.accounts.errorMessage
  }
};

export default compose(
  withRouter,
  connect(mapStateToProps, { getCurrentProfile, getAccountByHandle, shortlist })
)(Account);

