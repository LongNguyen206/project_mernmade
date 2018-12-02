import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Modal, Button, Row, Input } from 'react-materialize';


class NavbarComp extends Component {
    render () {
        return (
            <Navbar brand='logo' right>
                <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
                <NavItem>
                    <Modal header='Modal Header' trigger={<div>Sign In</div>}>
                        <Row>
                            <Input type="email" label="Email" s={12} />
                            <Input type="password" label="password" s={12} />                  
                        </Row>
                    </Modal>
                </NavItem>
            </Navbar>
          )
    }
  
}

export default NavbarComp;