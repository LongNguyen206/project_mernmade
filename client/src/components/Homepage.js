import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Homepage extends Component {
  componentDidMount() {
    this.props.getAccounts()
  };

  render() {
    return (
      <div className="App">
        <h1>Home page</h1>
      </div>
    );
  }
}

export default connect(null, actions)(Homepage);