import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import { Input, Icon, Row, Col } from 'react-materialize';

import { getAllAccounts } from '../actions/accountActions';
import Loader from './Loader';
import CardGrid from './CardGrid';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            filteredAccounts: [],
            platforms: [
                { id: 1, value: "Instagram", isChecked: false },
                { id: 2, value: "Youtube", isChecked: false },
                { id: 3, value: "Twitter", isChecked: false },
                { id: 4, value: "Facebook", isChecked: false }
            ],
            accountTypes: [
                { id: 5, value: "Influencer", isChecked: false },
                { id: 6, value: "Feature", isChecked: false },
                { id: 7, value: "Community", isChecked: false }
            ],
            filterByPlatform: [],
            filterByAccountType: []
        }
    };

    componentDidMount() {
        this.props.getAllAccounts();
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

    // Method that handles the checkall or uncheckall button
    handleAllChecked = e => {
        let platforms = this.state.platforms;
        let filterByPlatform = this.state.filterByPlatform;
        platforms.forEach(
            platform =>
                (platform.isChecked = e.target.checked) &&
                (filterByPlatform = [...filterByPlatform, platform.value]));

        let filteredAccounts = this.state.accounts.filter(account =>
            filterByPlatform.includes(account.platform));
        this.setState({
            filteredAccounts: filteredAccounts,
            platforms: platforms,
            filterByPlatform: filterByPlatform
        });
    };

    // Method that handles individual checkboxes
    handlePlatform = e => {
        let platforms = this.state.platforms;
        let filterByPlatform = this.state.filterByPlatform;
        platforms.forEach(platform => {
            if (platform.value === e.target.value) platform.isChecked = e.target.checked
        });
        if (filterByPlatform.includes(e.target.value)) {
            filterByPlatform = filterByPlatform.filter((element, index) => {
            return index !== filterByPlatform.indexOf(e.target.value);
        });
        } else {
            filterByPlatform = [...filterByPlatform, e.target.value];
        }
        this.setState(
        {
            platforms: platforms,
            filterByPlatform: filterByPlatform
        },
        this.filterAllAccounts
        );
    };

    handleAccountType = e => {
        let accountTypes = this.state.accountTypes;
        let filterByAccountType = this.state.filterByAccountType;
    
        accountTypes.forEach(accountType => {
          if (accountType.value === e.target.value)
            accountType.isChecked = e.target.checked;
        });
    
        if (filterByAccountType.includes(e.target.value)) {
            filterByAccountType = filterByAccountType.filter((element, index) => {
                return index !== filterByAccountType.indexOf(e.target.value);
            });
        } else {
          filterByAccountType = [...filterByAccountType, e.target.value];
        }
        this.setState({
            accountTypes: accountTypes,
            filterByAccountType: filterByAccountType
        }, this.filterAllAccounts
        );
    };

    filterAllAccounts = () => {
        let { filterByPlatform, filterByAccountType } = this.state;
        
        if (filterByPlatform.length === 0 && filterByAccountType.length === 0) {
            var filteredAccounts = this.state.accounts;
        } else if (filterByPlatform.length === 0 || filterByAccountType.length === 0) {
            var filteredAccounts = this.state.accounts.filter(
                account =>
                filterByPlatform.includes(account.platform) ||
                filterByAccountType.includes(account.accountType)
            );
        } else {
            var filteredAccounts = this.state.accounts.filter(
                account =>
                filterByPlatform.includes(account.platform) &&
                filterByAccountType.includes(account.accountType)
            );
        }
        this.setState({
          filteredAccounts: filteredAccounts
        });
    };

    render () {
        const { accounts, loading } = this.props.accounts;
        let shownAccounts, loader, accountsGrid;
        if (this.state.filterByPlatform.length === 0) {
            shownAccounts = this.state.accounts;
        } else {
            shownAccounts = this.state.filteredAccounts;
        }

        if (this.state.filterByAccountType.length === 0) {
            shownAccounts = this.state.accounts;
        } else {
            shownAccounts = this.state.filteredAccounts;
        }

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
                    <Col l={2} style={{marginLeft: '25px', width: '150px', float: 'left'}}>
                        <FilterBar
                            platforms={this.state.platforms}
                            accountTypes={this.state.accountTypes}
                            handleAllChecked={this.handleAllChecked}
                            handlePlatform={this.handlePlatform}
                            handleAccountType={this.handleAccountType}
                        />
                    </Col>
                    <Col l={10} style={{float: 'right', marginTop: "20px"}}>
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
                    <Input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.props.onSearch} style={{width: '90vw'}}><Icon style={{marginTop: '50%', width: '97%'}}>search</Icon></Input>
                </form>
            </div>
        )
    };
}

class FilterBar extends Component {
    render() {
        return (  
            <div>
                <ul>
                    <p>Platform</p>
                    <div>
                        {this.props.platforms.map(platform => {
                            return (<Row>
                                        <Input label={platform.value} key={platform.id} onClick={this.props.handlePlatform} type="checkbox" checked={platform.isChecked} value={platform.value} />
                                    </Row>
                            );
                        })}
                    </div>
                    <hr />
                    <p>Account Type</p>
                    <div>{this.props.accountTypes.map(type => {
                        return (<Row>
                                    <Input label={type.value} key={type.id} onClick={this.props.handleAccountType} type="checkbox" checked={type.isChecked} value={type.value} />{" "}
                                </Row>
                            );
                        })}
                    </div>
                </ul>
            </div>
        );
    }
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
    connect(mapStateToProps, { getAllAccounts })
)(SearchPage);
