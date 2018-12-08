import React, { Component } from 'react';
import { Footer, Row } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styling/Style.css';


class FooterComp extends Component {
    render () {
        return (
            <Footer
              copyrights="&copy; 2018 Hashtag Hound"
              links={
              <ul>
                  <a href="https://www.facebook.com/hashtaghoundapp/"><FontAwesomeIcon icon={['fab', 'facebook-f']} className="socialMedia"/></a>
                  &nbsp;&nbsp;
                <a href="https://www.instagram.com/hashtag_hound/">  <FontAwesomeIcon icon={['fab', 'instagram']} className="socialMedia" /></a>
              </ul>
              }
                className='example'>
              <Row>
                <ul className="footer-links">
                <a className="footer-page" href="/about">About Us</a>
                    &nbsp;&nbsp;
                <a className="footer-page" href="/termsandconditions">Terms </a>
                    &nbsp;&nbsp;
                <a className="footer-page" href="/privacypolicy">Privacy Policy</a>
                    &nbsp;
                </ul>
               </Row>
            </Footer>
        )
    }
}

export default FooterComp;
