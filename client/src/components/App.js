import React from 'react';
import { Container } from 'react-materialize';
import NavbarComp from './Navbar';
import FooterComp from './Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faAppStore } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faInstagram, faLinkedinIn, faAppStore)



export default (props) => {
    return (
      <div>
        <NavbarComp />
          <Container>
            { props.children }
          </Container>
        <FooterComp />
      </div>
    );
}
