import React from 'react';
import { Row, Col, Preloader } from 'react-materialize';

export default () => {
    return (
        <Row>
            <Col s={4}>
                <Preloader size='big'/>
            </Col>
        </Row>
    )
}