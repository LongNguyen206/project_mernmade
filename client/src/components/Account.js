import React, { Component } from 'react';

class Account extends Component {
  render () {
      const { account } = this.state;
      return (
          <div>
          // you need to style it here
          <img src={account.picture} />
          <div>{account.platform}</div>
          <div>{account.name}</div>

        </div>
      );
  }
}
export default Account;
