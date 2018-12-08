import React, { Component, Fragment } from "react";
import { Row, Col, Autocomplete, Input, Button, Card } from "react-materialize";
import Background from "../img/SearchPagephoto.jpg";
import SearchCard from "./SearchCard";

const headerStyle = {
  // backgroundImage: `url( ${Background} )`,
  height: "100vh",
  width: "100%",
  backgroundSize: "cover"
};

const autoCompleteStyle = {
  backgroundColor: "white",
  marginTop: "490px",

  width: "300px"
};

const locationStyle = {
  backgroundColor: "white",
  marginTop: "490px",

  width: "200px"
};

const dropDownStyle = {
  backgroundColor: "white",
  marginTop: "480px",
  maginLeft: "100px",

  width: "500px"
};

const buttonStyle = {
  marginTop: "490px",
  height: "55px"
};

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: "",
      industry: "",
      location: ""
    };
  }

  onChangeInput = event => {
    this.setState({
      platform: event.target.value
    });
  };
  onChangeAutoComplete = event => {
    console.log("before", event.target.value);
    this.setState({
      industry: event.target.value
    });
  };

  onChangeLocation = event => {
    this.setState({
      location: event.target.value
    });
  };

  onSubmit = event => {
    this.props.history.push({
      pathname: "/search_result",
      state: {
        industry: this.state.industry,
        platform: this.state.platform,
        location: this.state.location
      }
    });
  };

  render() {
    return (
      <Fragment>
        <div style={headerStyle}>
          <Row>
            <form>
              <div style={dropDownStyle}>
                <Input
                  backgroundColor="white"
                  type="select"
                  label="Materialize Select"
                  onChange={this.onChangeInput}
                  value={this.state.value}
                >
                  <option value="instagram">instagram</option>
                  <option value="youtube">youtube</option>
                  <option value="twitter">twitter</option>
                  <option value="facebook">facebook</option>
                </Input>
              </div>

              <Autocomplete
                onChange={this.onChangeAutoComplete}
                style={autoCompleteStyle}
                placeholder="which Category?"
                data={{
                  food: {
                    value: "food"
                  },
                  tech: null
                }}
              />

              <Autocomplete
                onChange={this.onChangeLocation}
                style={locationStyle}
                placeholder="Which Country?"
                data={{
                  Australia: {
                    value: "australia"
                  },
                  tech: null
                }}
              />
              <Button onClick={this.onSubmit} style={buttonStyle} waves="light">
                Submit
              </Button>
            </form>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default SearchPage;
