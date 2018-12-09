import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Col, Card, CardTitle } from 'react-materialize';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";

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
    if (nextProps.profile.profile !== null) {
        this.setState({
          shortlist: nextProps.profile.profile.shortlist
        })
    }
    if (this.state.shortlist.includes(this.props.account._id.toString())) {
      this.setState({
        saved: true
      })
      console.log("match", this.props.account.handle, this.state.saved)
    }
  };

  onClick = async (handle, profile) => {
    await this.props.shortlist(handle, profile);
    this.setState({
      saved: !this.state.saved
    })
  };

  render () {
    let icon, followerCount, savedIcon;
    if (this.props.account.platform === 'Instagram') {
      icon = <i class="fab fa-instagram"></i>
    } else if (this.props.account.platform === 'Twitter') {
      icon = <i class="fab fa-twitter"></i>
    } else if (this.props.account.platform === 'Facebook') {
      icon = <i class="fab fa-facebook"></i>
    } else if (this.props.account.platform === 'Youtube') {
      icon = <i class="fab fa-youtube"></i>
    }

    let followerStr = this.props.account.followers.toString() ;
  
    if (this.props.account.followers < 1000) {
      followerCount = followerStr
    } else if (this.props.account.followers < 1000000) {
      followerCount = (followerStr.slice(0 ,-3)) + '.' + (followerStr[followerStr.length-3]) + 'k'
    } else {
      followerCount = (followerStr.slice(0 ,-6)) + '.' + (followerStr[followerStr.length-6]) + 'm'
    } 

    if (this.state.saved === true) {
      savedIcon = <i title="Remove from saved" class="fas fa-heart"></i>
    } else {
      savedIcon = <i title="Save this account" class="far fa-heart"></i>
    }

    let truncateDesc;
    if (this.props.account.description.length > 67) {
      truncateDesc = this.props.account.description.substr(0,67) + '...'
    } else {
      truncateDesc = this.props.account.description
    }

    return (
      <Col m={7} s={12}>
        <Card horizontal header={<CardTitle image={this.props.account.picture}></CardTitle>}>
          <div className='pre-card-divider'>
            <p className="card-accountname"><a href={this.props.account.link} target="_blank">{this.props.account.accountName}</a></p>
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
      </Col>
    )
  }
}

// linking backend props to frontend state
const mapStateToProps = state => {
  return {
    profile: state.profile,
    accounts: state.account,
    errorMessage: state.account.errorMessage
  }
};

export default compose(
  withRouter,
  connect(mapStateToProps, { getCurrentProfile, shortlist })
)(AccountCard);
