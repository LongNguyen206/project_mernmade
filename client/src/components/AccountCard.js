import React, { Component } from "react";
import { Col, Card, CardTitle } from 'react-materialize';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, Link } from "react-router-dom";

import RoundLoader from './RoundLoader';
import { shortlist } from '../actions/accountActions';
import { getCurrentProfile } from '../actions/profileActions';

class AccountCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
      shortlist: []
    }
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }
  
  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.profile).length !== 0) {
      this.setState({
        shortlist: nextProps.profile.shortlist
      });
      if (this.state.shortlist.includes(this.props.account._id.toString())) {
        this.setState({
            saved: true
        })
      }
    } else {
      this.setState({
        saved: false
      })
    }
  };

  onClick = async (handle, profile) => {
    await this.props.shortlist(handle, profile);
    this.setState({
      saved: !this.state.saved
    })
  };

  render () {
    let cardContent;
    let icon, followerCount, savedIcon, truncateDesc;

    if (this.props.account === null) {
      cardContent = 
      <Card horizontal style={{height: '250px'}}>
        <div style={{padding: '20% 40%'}}>
          <RoundLoader />
        </div>
      </Card>
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
      }
    
      if (this.props.account.followers < 1000) {
        followerCount = followerStr
      } else if (this.props.account.followers < 1000000) {
        followerCount = (followerStr.slice(0 ,-3)) + '.' + (followerStr[followerStr.length-3]) + 'k'
      } else {
        followerCount = (followerStr.slice(0 ,-6)) + '.' + (followerStr[followerStr.length-6]) + 'm'
      } 

      if (this.state.saved === true) {
        savedIcon = <i title="Remove from saved" className="fas fa-bookmark fas-card"></i>
      } else {
        savedIcon = <i title="Save this account" className="far fa-bookmark far-card"></i>
      }

      if (this.props.account.description.length > 50) {
        truncateDesc = this.props.account.description.substr(0,50) + '...'
      } else {
        truncateDesc = this.props.account.description
      }

      cardContent = 
        <Card horizontal header={<CardTitle image={this.props.account.picture}></CardTitle>}>
          <div className='pre-card-divider'>
            <p className="card-accountname"><a href={this.props.account.link} target="_blank" rel="noopener noreferrer">{this.props.account.accountName}</a></p>
            <p className="card-follower-count" title={this.props.account.followers}>{icon} {followerCount}</p>
            <p className="card-industry">{this.props.account.industry}</p>
            <Link to={`/account/${this.props.account.handle}`}><p className="card-account-desc">{truncateDesc}</p></Link>
          </div>
          <div className="post-card-divider">
            <hr style={{marginTop: '30px'}} />
            <p className="card-account-type">{this.props.account.accountType}</p>
            <a className="card-saved-icon" onClick={this.onClick.bind(this, this.props.account.handle, this.props.profile)}>{savedIcon}</a>
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

// linking backend props to frontend state
const mapStateToProps = state => {
  return {
    profile: state.profile.profile,
    accounts: state.accounts,
    errorMessage: state.accounts.errorMessage
  }
};

export default compose(
  withRouter,
  connect(mapStateToProps, { getCurrentProfile, shortlist })
)(AccountCard);