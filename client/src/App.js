import React, { Component } from 'react';
import NavbarComp from './components/Navbar';
import SigninModal from './components/SigninModal';
import FooterComp from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComp />
        <h1>HashtagHound</h1>
        <FooterComp />
      </div>
    );
  }
}

export default App;
