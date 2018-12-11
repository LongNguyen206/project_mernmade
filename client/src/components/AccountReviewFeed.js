import React, { Component } from 'react';

import AccountReviewItem from './AccountReviewItem';

class AccountReviewFeed extends Component {
    render() {
        const {reviews, accountID } = this.props;
        return reviews.map(review => (
            <AccountReviewItem key={review._id} review={review} accountID={accountID} />
            )
        )
    }
}

export default AccountReviewFeed;