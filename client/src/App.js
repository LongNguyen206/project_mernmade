import React, { Component } from 'react';
// import Navbar from './components/Navbar'
// import Header from './components/Header'
// import Footer from './components/Footer'
import Landingpage from './Landingpage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignUp from './pages/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
    );
  }
}

export default App;
