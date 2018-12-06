import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import NavbarComp from './Navbar';
import FooterComp from './Footer';

library.add(faStroopwafel)

export default (props) => {
    return (
      <div>
        <NavbarComp />
          <div className="content">
          { props.children }
          </div>        
        <FooterComp />
      </div>
    )
}
