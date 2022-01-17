import React from 'react';
import { Badge, Col, Container, ListGroup, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container className='bg-slate-100'>
            <Row>
                <Col  md={6} className='my-5'>
                <ListGroup as="ol" numbered>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Cras justo odio
                    </div>
                    <Badge variant="primary" pill>
                      14
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Cras justo odio
                    </div>
                    <Badge variant="primary" pill>
                      14
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Cras justo odio
                    </div>
                    <Badge variant="primary" pill>
                      14
                    </Badge>
                  </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col  md={6}  className='my-5'>
                <ListGroup>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                </Col>
                
            </Row>
            <div className="p-3 bg-white">
                <p className="text-center my-2 text-muted">© Copyright 2018 | All rights reserved. Evercare Hospital Dhaka.</p>
            </div>
        </Container>
    );
};

export default Footer;