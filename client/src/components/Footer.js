import React, { Component } from 'react';
import { Footer } from 'react-materialize';
import '../styling/Footer.css';
import { Row } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class FooterComp extends Component {
    render () {
        return (
            <Footer copyrights="Copyright 2018 Hashtag Hound"
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
                 <FontAwesomeIcon icon="stroopwafel" />

                  </ul>
               </Row>
            </Footer>
        )
    }
}




export default FooterComp;
