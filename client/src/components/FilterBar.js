import React, { Component } from "react";
import CheckBox from "./CheckBox";

const searchHeaderStyle = {
  opacity: "0.6"
};

class FilterBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <p style={searchHeaderStyle}>Platfrom</p>
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
          <p style={searchHeaderStyle}>Account</p>
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
      // <div>
      //   <ul>
      //     <p style={searchHeaderStyle}>Platfrom</p>
      //     <p>
      //       <label>
      //         <input type="checkbox" />
      //         <span>Instagram</span>
      //       </label>
      //     </p>

      //     <p>
      //       <label>
      //         <input type="checkbox" />
      //         <span>Facebook</span>
      //       </label>
      //     </p>
      //     <p>
      //       <label>
      //         <input type="checkbox" />
      //         <span>twitter</span>
      //       </label>
      //     </p>
      //     <hr />
      //     <p style={searchHeaderStyle}>Type of account</p>
      //     <p>
      //       <label>
      //         <input type="checkbox" />
      //         <span>Influencer</span>
      //       </label>
      //     </p>
      //     <p>
      //       <label>
      //         <input type="checkbox" />
      //         <span>Feature</span>
      //       </label>
      //     </p>
      //     <p>
      //       <label>
      //         <input type="checkbox" />
      //         <span>Community</span>
      //       </label>
      //     </p>
      //     <hr />
      //     <p style={searchHeaderStyle}>Follower Count</p>
      //     <p>
      //       <label>
      //         <input type="checkbox" />
      //         <span>Any</span>
      //       </label>
      //     </p>
      //     <p>
      //       <label>
      //         <input type="checkbox" />
      //         <span>Less than 500k</span>
      //       </label>
      //     </p>
      //     <p>
      //       <label>
      //         <input type="checkbox" />
      //         <span>500k - 1 million</span>
      //       </label>
      //       <p>
      //         <label>
      //           <input type="checkbox" />
      //           <span>1 million +</span>
      //         </label>
      //       </p>
      //     </p>
      //   </ul>
      // </div>
    );
  }
}

export default FilterBar;
