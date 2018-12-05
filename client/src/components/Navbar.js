import React, { Component } from 'react';
import { Navbar, NavItem, Modal } from 'react-materialize';
import { connect } from 'react-redux';

import * as actions from '../actions';
import LoginModal from './LoginModal';

class NavbarComp extends Component {
    constructor(props) {
        super(props);
    }

    logOut = () => {
        console.log("Logout got called");
        this.props.logout();
    }

    render () {
        return (
            <Navbar brand='logo' right>
                { !this.props.isAuth ?
                [<NavItem key="signup" href="/register">Getting started</NavItem>,
                <NavItem key="signin">
                    <Modal  header='Sign In' trigger={<div>Sign In</div>}>
                        <LoginModal />
                    </Modal>
                </NavItem>]
                :
                <NavItem href="/logout" onClick={this.logOut}>Sign Out</NavItem>
                }      
            </Navbar>
        )
    }
}

// linking backend props to frontend state
const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuthenticated
    }
};

export default connect(mapStateToProps, actions)(NavbarComp);