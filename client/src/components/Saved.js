import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import { Input, Row } from 'react-materialize';

import { getShortlist } from '../actions/profileActions';
import { getCurrentProfile } from '../actions/profileActions';
import Loader from './Loader';
import CardGrid from './CardGrid';

class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            filteredAccounts: []
        }
    };

    componentDidMount() {
        this.props.getShortlist();
        this.props.getCurrentProfile();
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.accounts.length !== 0) {
            this.setState({
                accounts: nextProps.accounts.accounts,
                filteredAccounts: nextProps.accounts.accounts
            })
        }
    };

    onSearch = (e) => {
        var updatedList = this.state.accounts;
        updatedList = updatedList.filter(item => {
            let result = ((item.accountName.toLowerCase().search(e.target.value.toLowerCase()) !== -1) || 
                        (item.followers.toString().toLowerCase().search(e.target.value.toLowerCase()) !== -1) || 
                        (item.industry.toLowerCase().search(e.target.value.toLowerCase()) !== -1) || 
                        (item.platform.toLowerCase().search(e.target.value.toLowerCase()) !== -1) || 
                        (item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1) || 
                        (item.accountType.toLowerCase().search(e.target.value.toLowerCase()) !== -1))
            return result
        });
        this.setState({
            filteredAccounts: updatedList
        });
    }   

    render () {
        const { accounts, loading } = this.props.accounts;
        const { profile } = this.props.profile;
        let loader, accountsGrid;

        if (accounts === null || loading || profile === null) {
            loader = <Loader />;
            accountsGrid = null;
        } else if (accounts.length === 0) {
            // In case no accounts found
            loader = <h3>Oops, could not get any accounts</h3>;
            accountsGrid = null;
        } else {
            loader = null;
            accountsGrid = 
            <div>
                <Row>
                    <SearchBar onSearch={this.onSearch}/>
                </Row>
                <Row style={{marginRight: 'auto', marginLeft: 'auto'}}>
                    <h4 className="saved-header" style={{textAlign: 'center'}}>You Saved {this.state.accounts.length} {this.state.accounts.length == 1 ? "Account" : "Accounts"}</h4>
                    <CardGrid accounts={this.state.filteredAccounts} profile={this.props.profile} />
                </Row>
            </div>
        }

        return (
            <div className="searchpage">
                {loader}
                {accountsGrid}
            </div>
        )
    };
}

class SearchBar extends Component {
    render () {
        return (
            <div className="filter-list" style={{width: '100%', marginLeft: '10px'}}>
                <form>
                    <Input type="text" className="form-control form-control-lg" placeholder="Your wildcard search" onChange={this.props.onSearch} style={{ width:'97vw', fontSize: '40px'}} />
                </form>
            </div>
        )
    };
}

// linking backend props to frontend state
const mapStateToProps = state => {
    return {
        profile: state.profile,
        accounts: state.accounts,
        errorMessage: state.accounts.errorMessage
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, { getShortlist, getCurrentProfile })
)(Saved);
