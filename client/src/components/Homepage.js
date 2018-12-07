import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';

class Homepage extends Component {
  componentDidMount() {
    this.props.getAccounts()
  };

  render() {
    return (
      <div className="App" style={{textAlign: 'center'}}>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
        {this.props.accounts ? this.props.accounts.map(account => (<li>{account.name}</li>)) : null}
      </div>
    );
  }
}

Homepage.propTypes = {
  getAccounts: PropTypes.func.isRequired,
  accounts: PropTypes.object.isRequired
}

// linking backend props to frontend state
const mapStateToProps = state => {
  return {
      accounts: state.home.accounts
  }
};
export default connect(mapStateToProps, actions)(Homepage);