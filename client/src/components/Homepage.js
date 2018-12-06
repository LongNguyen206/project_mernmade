import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Homepage extends Component {
  componentDidMount() {
    this.props.getAccounts()
  };

  render() {
    return (
      <div className="App" style={{textAlign: 'center'}}>
      <br />
        <p>{JSON.stringify(this.props.accounts)}</p>
      </div>
    );
  }
}

// linking backend props to frontend state
const mapStateToProps = state => {
  return {
      accounts: state.home.accounts
  }
};
export default connect(mapStateToProps, actions)(Homepage);