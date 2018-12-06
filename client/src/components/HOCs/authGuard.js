import React, { Component } from 'react';
import { connect } from "react-redux";

export default (OriginalComponent) => {
    class MixedComponents extends Component {
        chechAuth() {
            // Whether the user is authenticated
            if (!this.props.isAuth && !this.props.jwToken) {
                this.props.history.push('/login');
            }
        };

        componentDidMount() {
            this.chechAuth();
        };

        componentDidUpdate() {
            this.chechAuth();
        };

        render() {
            return <OriginalComponent {...this.props} />;
        };
    }

    // linking backend props to frontend state
    const mapStateToProps = state => {
        return {
            isAuth: state.auth.isAuthenticated,
            jwToken: state.auth.token
        }
    };

    return connect(mapStateToProps)(MixedComponents);
}