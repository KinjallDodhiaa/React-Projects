import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Description from './description';
import Sidebar from './sidebar';

const Content = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3' md='3' sm='12'>
                    <Sidebar/>
                    </Col>
                    <Col lg='9' md='3' sm='12'>
                    <Description/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Content;