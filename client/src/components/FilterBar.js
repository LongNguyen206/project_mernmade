import React, { Component } from "react";
import CheckBox from "./CheckBox";

class FilterBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.props.platforms.map(platform => {
            return (
              <CheckBox
                key={platform.id}
                handlePlatform={this.props.handlePlatform}
                {...platform}
              />
            );
          })}
          <hr />
          {this.props.accountTypes.map(type => {
            return (
              <CheckBox
                key={type.id}
                handlePlatform={this.props.handleAccountType}
                {...type}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default FilterBar;
