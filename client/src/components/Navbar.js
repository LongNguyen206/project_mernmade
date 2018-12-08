import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Navbar, NavItem, Modal } from 'react-materialize';

import '../styling/Style.css';
import * as actions from '../actions/authActions';
import LoginModal from './LoginModal';

class NavbarComp extends Component {
    constructor(props) {
        super(props);
    }

    logOut = () => {
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = ([
            <NavItem title="My Profile">
                <img 
                    src={user.avatar}
                    style={{ width: '20px', marginRight: '10px', borderRadius: '50%' }}
                />
                {user.name}
            </NavItem>,
            <NavItem title="Saved Accounts">saved</NavItem>,
            <NavItem onClick={this.logOut}>log out</NavItem>
        ]);
        const guestLinks = (
            // if user is unauthenticated and at '/register' path, hide the Sign Up link
            this.props.location.pathname === '/register' ?
            <NavItem className="up-button" key="signin">
                <Modal trigger={<div>Log In</div>} >
                    <LoginModal />
                </Modal>
            </NavItem>
            // if user is unauthenticated and at '/' path, show both
            : this.props.location.pathname === '/' ?
            [<NavItem className="up-button" key="signup" href="/register">Sign Up</NavItem>,
            <NavItem className="up-button" key="signin">
                <Modal trigger={<div>Log in</div>}>
                    <LoginModal />
                </Modal>
            </NavItem> ]
            // but if user is unauthenticated and get redirected to '/login' path, hide the Sign In link
            :
            <NavItem className="up-button" key="signup" href="/register">Sign Up</NavItem>
        );

        return (
            <Navbar brand='HASHTAG HOUND' fixed='true' right>
                { !isAuthenticated ? guestLinks : authLinks }
            </Navbar>
        )
    }
}

// linking backend props to frontend state
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, actions)(withRouter(NavbarComp));
