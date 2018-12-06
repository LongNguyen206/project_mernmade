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
                <a href="https://www.instagram.com/hashtag_hound/">  <FontAwesomeIcon icon={['fab', 'instagram']} className="socialMedia" /></a>
                <a href="https://www.facebook.com/hashtaghoundapp/"><FontAwesomeIcon icon={['fab', 'facebook-f']} className="socialMedia"/></a>
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
