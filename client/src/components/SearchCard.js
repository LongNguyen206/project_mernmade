import React, { Component, Fragment } from "react";
import { Row, Col, Autocomplete, Input, Button, Card } from "react-materialize";

const headerStyle = {
  height: "100vh",
  width: "100%",
  backgroundSize: "cover"
};

const autoCompleteStyle = {
  backgroundColor: "white",

  width: "300px"
};

const locationStyle = {
  backgroundColor: "white",

  width: "200px"
};

const dropDownStyle = {
  backgroundColor: "white",

  maginLeft: "100px",

  width: "500px"
};

const buttonStyle = {
  height: "55px"
};

const cardStyle = {
  minWidth: "835px",
  maxHeight: "100px"
};

class SearchCard extends Component {
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
    console.log("after", typeof event.target.value);
  };

  onChangeLocation = event => {
    this.setState({
      location: event.target.value
    });
    console.log("after", typeof event.target.value);
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
        <Row>
          <Col sm={4} />
          <Col sm={4}>
            <Card>
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
                <Button
                  onClick={this.onSubmit}
                  style={buttonStyle}
                  waves="light"
                >
                  Submit
                </Button>
              </form>
            </Card>
          </Col>
          <Col sm={4} />
        </Row>
      </Fragment>
    );
  }
}

export default SearchCard;
