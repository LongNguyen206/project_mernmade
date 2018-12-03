import React, { Component } from 'react';
import { Navbar, NavItem, Modal, Button, Row, Input } from 'react-materialize';
import { reduxForm, Field } from 'redux-form';

class NavbarComp extends Component {
    render () {
        return (
            <Navbar brand='logo' right>
                <NavItem href="/register">Getting started</NavItem>
                <NavItem>
                    <Modal header='Modal Header' trigger={<div>Sign In</div>}>
                        <Row>
                            {/* <form>
                                <fieldset>
                                    <Field name="email" type="text" id="email" component="input" />
                                </fieldset>
                                <fieldset>
                                    <Field name="password" type="password" id="password" component="input" />
                                </fieldset>
                                <Button type="submit">Sign In</Button>
                            </form> */}
                            <Input type="email" label="Email" s={12} />
                            <Input type="password" label="password" s={12} />
                            <Button waves='light' node='a' href='/api/users/auth/facebook'> Facebook </Button>            
                        </Row>
                    </Modal>
                </NavItem>
            </Navbar>
        )
    }
}

export default NavbarComp;