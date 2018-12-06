import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, NavItem, Modal } from 'react-materialize';

import '../styling/Style.css';
import * as actions from '../actions';
import LoginModal from './LoginModal';

class NavbarComp extends Component {
    constructor(props) {
        super(props);
    }

    logOut = () => {
        this.props.logout();
    }

    render() {
        return (
            <Navbar brand='HASHTAG HOUND' right>
                { !this.props.isAuth ?
                [ <NavItem className="up-button" key="signup" href="/register">Sign Up</NavItem>,
                <NavItem className="up-button" key="signin">
                    <Modal header='Sign In' trigger={<div>Sign In</div>} >
                        <LoginModal />
                    </Modal>
                </NavItem> ]
                :
                <NavItem href="/" onClick={this.logOut}>Sign Out</NavItem>
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
