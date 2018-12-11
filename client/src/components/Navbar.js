import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Navbar, NavItem, Modal } from 'react-materialize';

import { logout } from '../actions/authActions';
import { clearCurrentProfile } from '../actions/profileActions';
import { clearAllAccounts } from '../actions/accountActions';
import LoginModal from './LoginModal';

class NavbarComp extends Component {
    componentDidMount() {
        console.log(this.props.auth.user.name)
        console.log(this.props.auth.user.avatar)
    }
    logOut = () => {
        this.props.clearCurrentProfile();
        this.props.clearAllAccounts();
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = ([
            <NavItem key={1} title="My Profile" href='/myprofile'>
                <img 
                    alt={user.name}
                    src={user.avatar}
                    style={{ width: '20px', marginRight: '10px', borderRadius: '50%' }}
                />
                {user.name}
            </NavItem>,
            <NavItem key={2} href='/saved' title="Saved Accounts">saved</NavItem>,
            <NavItem key={3} onClick={this.logOut}>log out</NavItem>
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

export default connect(mapStateToProps, { 
    logout, 
    clearCurrentProfile,
    clearAllAccounts
})(withRouter(NavbarComp));