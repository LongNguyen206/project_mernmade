import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import NavbarComp from './Navbar';
import FooterComp from './Footer';

library.add(faFacebookF, faInstagram);

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
