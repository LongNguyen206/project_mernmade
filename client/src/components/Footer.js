import React, { Component } from 'react';
import { Footer, Row } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styling/Style.css';

class FooterComp extends Component {
    render () {
        return (
            <Footer 
              copyrights="Copyright &copy; 2018 Hashtag Hound"
              links={
              <ul>
                <a className="grey-text text-lighten-3" href="#!">Facebook</a>
                <a className="grey-text text-lighten-3" href="#!">LinkedIn</a>
                <a className="grey-text text-lighten-3" href="#!">Twitter</a>
              </ul>
              }
                className='example'>
              <Row>
                <ul className="footer-links">
                  <a className="grey-text text-lighten-3" href="#!">About Us</a>
                    &nbsp;&nbsp;
                  <a className="grey-text text-lighten-3" href="#!">Terms & Conditions</a>
                    &nbsp;&nbsp;
                  <a className="grey-text text-lighten-3" href="#!">Privacy Policy</a>
                    &nbsp;&nbsp;
                  <a className="grey-text text-lighten-3" href="#!">Contact Us </a>
                </ul>
               </Row>
            </Footer>
        )
    }
}

export default FooterComp;