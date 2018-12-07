import React, { Component, Fragment } from "react";
import { Row, Card, CardTitle, Col } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paper from "@material-ui/core/Paper";

const cardStyle = {
  marginTop: "52px",
  minWidth: "300px",
  height: "500px"
};

const cardContentStyle = {
  maxWidth: "500px",
  height: "700px"
};

const cardPicture = {
  maxWidth: "100px",
  height: "100px",
  marginBottom: "50px"
};

const iconStyle = {
  fontSize: "20px"
};

const ratingMargin = {
  marginTop: "10px",
  backGroundColor: "lightgray"
};

const profileNameStyle = {
  fontSize: "20px",
  color: "black",
  textDecoration: "none",

  paddingBottom: ".05em",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: "rgba(29,29,29,.3)"
};

const text = {
  opacity: "0.5"
};

class AccountCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        name: "@instagraminfluencer",
        followers: "67k",
        bio:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium facere, voluptate molestiae nisi eligendi recusandae blanditiis. Minus, dolorum itaque illo sint quos repudiandae esse atque aut, sit accusantium corrupti deleniti.",
        rating: "4",
        profilePicture: ""
      }
    };
  }

  render() {
    return this.props.filteredProfiles.map(filteredProfile => {
      return (
        <Fragment>
          <Row>
            <Col s={2} className="grid-example" />

            <Col s={8} className="grid-example">
              <Col s={4} className="grid-example">
                <Card
                  style={cardStyle}
                  className="card small'"
                  header={<CardTitle />}
                >
                  <Row>
                    <Col>
                      <img
                        style={cardPicture}
                        src="https://www.badmousevinyls.com/image/thumbnails/18/93/vinilos_adhesivos_decorativos_mickey_mouse_1274_MCO17800083_8753_F_jpg-100657-350x350.jpg"
                        alt=""
                      />
                    </Col>
                    <Col>
                      <i style={iconStyle} class="fab fa-instagram" />
                      <Paper style={ratingMargin}>
                        <p>
                          Rating : {this.state.profile.rating}{" "}
                          <i class="fas fa-star" />
                        </p>
                      </Paper>
                    </Col>
                  </Row>
                  <a
                    style={profileNameStyle}
                    href="https://www.instagram.com/?hl=en"
                  >
                    {this.state.profile.name}
                  </a>
                  <br />
                  <br />
                  <hr />

                  <p style={text}>Bio : {this.state.profile.bio}</p>
                  <hr />
                  <p style={text}>Followers : {this.state.profile.followers}</p>
                </Card>
              </Col>
            </Col>
          </Row>
        </Fragment>
      );
    });
  }
}

export default AccountCard;
