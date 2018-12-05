import React from 'react';
import { Container } from 'react-materialize';

import NavbarComp from './Navbar';
import FooterComp from './Footer';

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