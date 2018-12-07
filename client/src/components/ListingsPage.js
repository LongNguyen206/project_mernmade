import React, { Component, Fragment } from "react";
import "../styling/Style.css";
import { Row, Col } from "react-materialize";
import AccountCard from "./AccountCard";
import FilterBar from "./FilterBar";

const filterBarStyle = {
  marginTop: "52px"
};

class ListingsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // The profiles array
      profiles: [
        {
          id: 1,
          name: "pr1",
          platform: "instagram",
          accountType: "influencer",
          industry: "food",
          location: "australia",
          followers: 400000,
          engagement: ""
        },
        {
          id: 2,
          name: "pr2",
          platform: "twitter",
          accountType: "feature",
          followers: 400000,
          engagement: ""
        },
        {
          id: 3,
          name: "pr3",
          platform: "instagram",
          accountType: "influencer",
          industry: "food",
          location: "australia",
          followers: 400000,
          engagement: ""
        },
        {
          id: 4,
          name: "pr4",
          platform: "twitter",
          accountType: "community",
          followers: 400000,
          engagement: ""
        },
        {
          id: 5,
          name: "pr5",
          platform: "instagram",
          accountType: "community",
          followers: 400000,
          engagement: ""
        },
        {
          id: 6,
          name: "pr6",
          platform: "youtube",
          accountType: "influencer",
          followers: 400000,
          engagement: ""
        },
        {
          id: 7,
          name: "pr7",
          platform: "instagram",
          accountType: "influencer",
          followers: 400000,
          engagement: ""
        },
        {
          id: 8,
          name: "pr8",
          platform: "twitter",
          accountType: "influencer",
          followers: 400000,
          engagement: ""
        },
        {
          id: 9,
          name: "pr9",
          platform: "instagram",
          accountType: "feature",
          followers: 400000,
          engagement: ""
        },
        {
          id: 10,
          name: "pr10",
          platform: "youtube",
          accountType: "influencer",
          followers: 400000,
          engagement: ""
        }
      ],
      filteredProfiles: [
        {
          id: 1,
          name: "pr1",
          platform: "instagram",
          accountType: "influencer",
          industry: "food",
          location: "australia",
          followers: 400000,
          engagement: ""
        },
        {
          id: 2,
          name: "pr2",
          platform: "twitter",
          accountType: "feature",
          followers: 400000,
          engagement: ""
        },
        {
          id: 3,
          name: "pr3",
          platform: "instagram",
          accountType: "influencer",
          industry: "food",
          location: "australia",
          followers: 400000,
          engagement: ""
        },
        {
          id: 4,
          name: "pr4",
          platform: "twitter",
          accountType: "community",
          followers: 400000,
          engagement: ""
        },
        {
          id: 5,
          name: "pr5",
          platform: "instagram",
          accountType: "community",
          followers: 400000,
          engagement: ""
        },
        {
          id: 6,
          name: "pr6",
          platform: "youtube",
          accountType: "influencer",
          followers: 400000,
          engagement: ""
        },
        {
          id: 7,
          name: "pr7",
          platform: "instagram",
          accountType: "influencer",
          followers: 400000,
          engagement: ""
        },
        {
          id: 8,
          name: "pr8",
          platform: "twitter",
          accountType: "influencer",
          followers: 400000,
          engagement: ""
        },
        {
          id: 9,
          name: "pr9",
          platform: "instagram",
          accountType: "feature",
          followers: 400000,
          engagement: ""
        },
        {
          id: 10,
          name: "pr10",
          platform: "youtube",
          accountType: "influencer",
          followers: 400000,
          engagement: ""
        }
      ],

      platforms: [
        { id: 1, value: "instagram", isChecked: false },
        { id: 2, value: "youtube", isChecked: false },
        { id: 3, value: "twitter", isChecked: false },
        { id: 4, value: "facebook", isChecked: false }
      ],
      accountTypes: [
        { id: 5, value: "influencer", isChecked: false },
        { id: 6, value: "feature", isChecked: false },
        { id: 7, value: "community", isChecked: false }
      ],

      filterByPlatform: [],
      filterByAccountType: []
    };
  }

  componentWillMount() {
    const searchResult = this.state.profiles.filter(
      profile =>
        profile.platform === this.props.location.state.platform &&
        profile.industry === this.props.location.state.industry &&
        profile.location === this.props.location.state.location
    );
    this.setState({
      filteredProfiles: searchResult
    });
  }

  // Method that handles the checkall or uncheckall button
  handleAllChecked = event => {
    let platforms = this.state.platforms;
    let filterByPlatform = this.state.filterByPlatform;

    platforms.forEach(
      platform =>
        (platform.isChecked = event.target.checked) &&
        (filterByPlatform = [...filterByPlatform, platform.value])
    );

    let filteredProfiles = this.state.profiles.filter(profile =>
      filterByPlatform.includes(profile.platform)
    );

    this.setState({
      filteredProfiles: filteredProfiles,
      platforms: platforms,
      filterByPlatform: filterByPlatform
    });
  };
  // Method that handles individual checkboxes
  handlePlatform = event => {
    let platforms = this.state.platforms;
    let filterByPlatform = this.state.filterByPlatform;

    platforms.forEach(platform => {
      if (platform.value === event.target.value)
        platform.isChecked = event.target.checked;
    });

    if (filterByPlatform.includes(event.target.value)) {
      filterByPlatform = filterByPlatform.filter((element, index) => {
        return index !== filterByPlatform.indexOf(event.target.value);
      });
    } else {
      filterByPlatform = [...filterByPlatform, event.target.value];
    }
    this.setState(
      {
        platforms: platforms,
        filterByPlatform: filterByPlatform
      },
      this.filterAllProfiles
    );
  };

  handleAccountType = event => {
    let accountTypes = this.state.accountTypes;
    let filterByAccountType = this.state.filterByAccountType;

    accountTypes.forEach(accountType => {
      if (accountType.value === event.target.value)
        accountType.isChecked = event.target.checked;
    });

    if (filterByAccountType.includes(event.target.value)) {
      filterByAccountType = filterByAccountType.filter((element, index) => {
        return index !== filterByAccountType.indexOf(event.target.value);
      });
    } else {
      filterByAccountType = [...filterByAccountType, event.target.value];
    }
    this.setState(
      {
        accountTypes: accountTypes,
        filterByAccountType: filterByAccountType
      },
      this.filterAllProfiles
    );
  };

  filterAllProfiles = () => {
    let { filterByPlatform, filterByAccountType } = this.state;

    if (filterByPlatform.length === 0 && filterByAccountType.length === 0) {
      var filteredProfiles = this.state.profiles;
    } else if (
      filterByPlatform.length === 0 ||
      filterByAccountType.length === 0
    ) {
      var filteredProfiles = this.state.profiles.filter(
        profile =>
          filterByPlatform.includes(profile.platform) ||
          filterByAccountType.includes(profile.accountType)
      );
    } else {
      var filteredProfiles = this.state.profiles.filter(
        profile =>
          filterByPlatform.includes(profile.platform) &&
          filterByAccountType.includes(profile.accountType)
      );
    }

    this.setState({
      filteredProfiles: filteredProfiles
    });
  };

  render() {
    let shownProfiles;
    if (this.state.filterByPlatform.length === 0) {
      shownProfiles = this.state.profiles;
    } else {
      shownProfiles = this.state.filteredProfiles;
    }

    if (this.state.filterByAccountType.length === 0) {
      shownProfiles = this.state.profiles;
    } else {
      shownProfiles = this.state.filteredProfiles;
    }
    return (
      <Fragment>
        <Row>
          {/* filter bar section */}
          {/* the component filters the data based on the influencer checked */}
          <Col style={filterBarStyle} s={2}>
            <FilterBar
              platforms={this.state.platforms}
              accountTypes={this.state.accountTypes}
              handleAllChecked={this.handleAllChecked}
              handlePlatform={this.handlePlatform}
              handleAccountType={this.handleAccountType}
            />
          </Col>
          {/* listings section */}

          <Col s={4}>
            <AccountCard filteredProfiles={this.state.filteredProfiles} />
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default ListingsPage;
