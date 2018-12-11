import React, { Component } from 'react';
import ReactStars from 'react-stars';

export default class CustomStarInput extends Component {
    render() {
        const { input: { value, onChange } } = this.props;
        return (
            <div className="form-group-profile">
                <ReactStars
                    count={this.props.count}
                    size={this.props.size}
                    color2={'#ffd700'}
                    className="form-control-stars"
                    value={value}
                    onChange={onChange}
                />
            </div>
        )
    }
}