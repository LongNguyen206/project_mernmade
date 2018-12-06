import React, { Component } from 'react';
import { Navbar, NavItem, Modal } from 'react-materialize';
import { connect } from 'react-redux';
import '../styling/NavbarComp.css';

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
            <Navbar brand='HASHTAG HOUND' right>
                { !this.props.isAuth ?
                [<NavItem className="up-button" key="signup" href="/register">Sign Up</NavItem>,
                <NavItem key="signin">
                    <Modal  header='Sign In' trigger={<div>Sign In</div>} style={{width: '26%', height: '64%', backgroundColor: 'white', borderRadius: 5, textAlign: 'center' }}>
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
