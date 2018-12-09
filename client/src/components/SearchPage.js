import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";

import { getAllAccounts } from '../actions/accountActions';
import Loader from './Loader';
import CardGrid from './CardGrid';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: []
        }
    };

    componentDidMount() {
        this.props.getAllAccounts();
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.accounts.length !== 0) {
            this.setState({
                accounts: nextProps.accounts.accounts
            })
        }
    };

    render () {
        const { accounts, loading } = this.props.accounts;
        let loader, accountsGrid;

        if (accounts === null || loading ) {
            loader = <Loader />;
            accountsGrid = null;
        } else if (accounts.length === 0) {
            // In case no accounts found
            loader = <h3>Oops, could not get any accounts</h3>;
            accountsGrid = null;
        } else {
            loader = null;
            accountsGrid = <CardGrid accounts={this.state.accounts} />;
        }

        return (
            <div className="searchpage">
                {loader}
                {accountsGrid}
            </div>
        )
    };
}

// linking backend props to frontend state
const mapStateToProps = state => {
    return {
        accounts: state.account,
        errorMessage: state.account.errorMessage
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, { getAllAccounts })
)(SearchPage);
