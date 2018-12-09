import React, { Component } from 'react';
import { Container, Row, Col, Button, Input } from 'react-materialize';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, Link } from "react-router-dom";

import { getAccountByHandle, shortlist } from '../actions/accountActions';
import Loader from './Loader';
import AccountSummary from './AccountSummary';
import ReviewForm from './ReviewForm';

class Account extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getAccountByHandle(this.props.match.params.handle);
    }
  }

  render() {
    const { loading } = this.props.account;
    const account = this.props.account.account;
    
    let loader, accountContent;
    
    if (account === null || loading ) {
      loader = <Loader />;
      accountContent = null;
    } else {
      loader = null;
      accountContent = <AccountSummary account={account} />;
    }

    return (
      <Row>
        {loader}
        <Col m={12} l={6} s={12} style={{marginLeft: '10%'}}>
          {accountContent}
        </Col>
        <Col m={12} l={3} s={12}>
          <ReviewForm />
        </Col>
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
  connect(mapStateToProps, { getAccountByHandle, shortlist })
)(Account);