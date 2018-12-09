import React, { Component } from "react";
import CheckBox from "./CheckBox";

class FilterBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <p>Platfrom</p>
          <p>
            {this.props.platforms.map(platform => {
              return (
                <CheckBox
                  key={platform.id}
                  handleFilter={this.props.handlePlatform}
                  {...platform}
                />
              );
            })}
          </p>
          <hr />
          <p>Account Type</p>
          <p>
            {this.props.accountTypes.map(type => {
              return (
                <CheckBox
                  key={type.id}
                  handleFilter={this.props.handleAccountType}
                  {...type}
                />
              );
            })}
          </p>
        </ul>
      </div>
      {/* <div>
        <ul>
          <hr />
          <p style={searchHeaderStyle}>Follower Count</p>
          <p>
            <label>
              <input type="checkbox" />
              <span>Any</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" />
              <span>Less than 500k</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" />
              <span>500k - 1 million</span>
            </label>
            <p>
              <label>
                <input type="checkbox" />
                <span>1 million +</span>
              </label>
            </p>
          </p>
        </ul>
      </div> */}
    );
  }
}

export default FilterBar;
