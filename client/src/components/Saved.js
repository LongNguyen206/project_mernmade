import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import { Input, Icon, Row, Col } from 'react-materialize';

import { getShortlist } from '../actions/profileActions';
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
            accountsGrid = 
            <div>
                <Row>
                    <SearchBar onSearch={this.onSearch}/>
                </Row>
                <Row>
                    <Col l={10} style={{float: 'right'}}>
                        <CardGrid accounts={this.state.filteredAccounts} />
                    </Col>
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
                    <Input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.props.onSearch}><Icon style={{marginTop: '50%'}}>search</Icon></Input>
                </form>
            </div>
        )
    };
}

// linking backend props to frontend state
const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        errorMessage: state.accounts.errorMessage
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, { getShortlist })
)(Saved);
