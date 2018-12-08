import React, {Component} from 'react';

class IndividualProfile extends Component {
  state = {
    account: {
        name: "pr1",
        platform: "instagram",
        picture: "<put in some url with random photo on the internet here>",
        accountType: "influencer",
        industry: "food",
        location: "australia",
        followers: 400000,
        engagement: 50
    }
}

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
export default IndividualProfile;
