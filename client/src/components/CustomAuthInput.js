import React, { Component } from 'react';
import { Input } from 'react-materialize';

export default class CustomAuthInput extends Component {
    render() {
        const { input: { value, onChange } } = this.props;
        return (
            <div className="form-group auth">
                <Input
                    label={this.props.label}
                    name={this.props.name}
                    id={this.props.id}
                    className="form-control-auth"
                    type={this.props.type}
                    s={this.props.s}
                    l={this.props.l}
                    m={this.props.m}
                    placeholder={this.props.placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        )
    }
}
