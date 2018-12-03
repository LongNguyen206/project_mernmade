import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';

class Register extends Component {
    render () {
        return (
            <Row>
                <Input label="Full Name" s={12} />
                <Input type="email" label="Email" s={12} />
                <Input type="password" label="Password" s={12} />
                <Input type="password" label="Confirm Password" s={12} />
            </Row>
        )
    }
}

export default Register;