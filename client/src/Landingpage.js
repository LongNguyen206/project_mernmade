import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

class Landingpage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Landingpage;
