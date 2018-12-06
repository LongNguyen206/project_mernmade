import React, { Component, Fragment } from "react";
import Row from "react-materialize/lib/Row";
import { Col } from "react-materialize";

function CheckFilteredProfiles(props) {
  // apply a map logic here

  if (props.filteredprofiles.length > 0) {
    return props.filteredprofiles.map(filteredProfile => {
      return (
        <div key={filteredProfile.id} id="card" className="card">
          <div className="card-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZUOde6VZZPYi3urv45bDbtX9ctixKez_XKieINTXO1yizobSuQ" />
            <span className="card-title" />
          </div>
          <div id="profile" className="card-content">
            {filteredProfile.name}
          </div>
          <div className="card-content">{filteredProfile.accountType}</div>
          <div className="card-content">{filteredProfile.platform}</div>

          <div id="followercount" className="card-content">
            <hr />
            Followers:{filteredProfile.followers}
          </div>
        </div>
      );
    });
  }
  return null;
}

class ListingCard extends Component {
  constructor(props) {
    super(props);
    const { classes } = this.props;
  }
  render() {
    return (
      <CheckFilteredProfiles filteredprofiles={this.props.filteredProfiles} />
    );
  }
}

export default ListingCard;
