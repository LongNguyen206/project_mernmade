import React, { Component } from "react";
import { connect } from 'react-redux'


// psuedo code
// 1. when the user visits the listings page they will click on the button linking to the listings profile page
// 2. on that page they will see all the elements that were linked to the listings card that are also specified in the account schema.

// This includes :
// * social media handle *name *platform *platform link *account type
// *followers *engagement *industry *location  *description *reviews which is linked on the listings page. earch review belongs to one user and that user belongs to that review

// 1. first i will need to set the state to grab info from the schema
// 2. then i will need to set the route for the profile:id so that each profile is linked to a unique id
// 2. then i will need to specify each element inside a div/row such as image of the user displayed in a specific way. This should include each individual user that is added by the Admin.
// Every user added by the admin, whatever they input should be linked to the schema which is displayed here on the profile
// 3. After i inject them inside the profile layout i will need to  display the results and export my listings profile




class ListingsProfile extends Component {
  state = {}

  componentWillMount() {
    const id = this.props.match.params.id;

    //Go fetch the data with our id above!!!!!!!
    const data = {
      id: id,
      name: "pr1",
      platform: "instagram",
      accountType: "influencer",
      industry: "food",
      location: "australia",
      followers: 400000,
      engagement: ""
    };

    // backend implemented : fetch the data from the backend via axios.get
    /////////////////////////////////////////////

    this.setState({profile: data});
  }

  render () {
      const { name, platform, accountType, industry, location, followers, engagement } = this.state.profile;

      return (
        <div>{platform}</div>
      );
  }
}





export default ListingsProfile;
