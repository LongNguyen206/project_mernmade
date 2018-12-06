import React, { Component, Fragment } from "react";
import { Row, Col, Autocomplete, Input, Button } from "react-materialize";
import Background from "../img/SearchPagephoto.jpg";

const headerStyle = {
  backgroundImage: `url( ${Background} )`,
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
    // return (
    //   <Route
    //     exact
    //     path="/listingspage"
    //     component={ListingsPage}
    //     industry={this.state.industry}
    //   />
    // );
  };

  render() {
    return (
      <Fragment>
        <header style={headerStyle}>
          <form>
            <Row>
              <Col s={4} className="grid-example">
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
              </Col>
              <Col s={4} className="grid-example">
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
              </Col>
              <Col s={4} className="grid-example">
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
              </Col>
            </Row>
          </form>
        </header>
      </Fragment>
    );
  }
}

export default SearchPage;
