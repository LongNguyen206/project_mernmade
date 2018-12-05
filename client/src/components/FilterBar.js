import React, { Component } from "react";
import CheckBox from "./CheckBox";

class FilterBar extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.platforms.map(platform => {
            return (
              <CheckBox
                key={platform.id}
                handleFilter={this.props.handlePlatform}
                {...platform}
              />
            );
          })}
          <hr />
          {this.props.accountTypes.map(type => {
            return (
              <CheckBox
                key={type.id}
                handleFilter={this.props.handleAccountType}
                {...type}
              />
            );
          })}
        </ul>
      </div>
    );
  };
  
};

export default FilterBar;