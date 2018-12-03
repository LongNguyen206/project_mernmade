import React from 'react';
import NavbarComp from './Navbar';
import FooterComp from './Footer';

export default (props) => {
    return (
      <div>
        <NavbarComp />
          { props.children }
        <FooterComp />
      </div>
    );
}