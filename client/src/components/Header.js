import React, {Component} from 'react';
import Background from '../img/fixedImg.png';
import './Header.css';
import { Link } from 'react-router-dom';


const headerStyle = {
  backgroundImage:  `url( ${Background} )`,
  height: '100vh',
  backgroundSize: 'cover'
}

// class component for our image on the home page
// the <br> needs fixing in the css file
class Header extends Component {
  render() {
    return (
       <header style={headerStyle}>
             <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
          <h1>Hashtag Hound </h1>
          <p> Connecting influencers with brands </p>
          <Link to="/signup">Find an Influencer</Link>
       </header>

    );
  }
};


export default Header;
