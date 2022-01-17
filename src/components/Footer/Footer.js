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
                      <div className="fw-bold">Ambulance</div>
                      Ambulance service available.
                    </div>
                    <Badge variant="primary" pill>
                      5
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Medicine</div>
                      Pharmacy service available. 
                    </div>
                    <Badge variant="primary" pill>
                      10
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Surgical</div>
                      Surgical product available.
                    </div>
                    <Badge variant="primary" pill>
                      7
                    </Badge>
                  </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col  md={6}  className='my-5'>
                <ListGroup>
                  <ListGroup.Item className='fw-bold'>Blood Tests</ListGroup.Item>
                  <ListGroup.Item>Comprehensive metabolic panel</ListGroup.Item>
                  <ListGroup.Item>Lipid panel</ListGroup.Item>
                  <ListGroup.Item>Thyroid panel</ListGroup.Item>
                  <ListGroup.Item>Coagulation panel</ListGroup.Item>
                </ListGroup>
                </Col>
                
            </Row>
            <div className="p-3 bg-white">
                <p className="text-center my-2 text-muted">&copy; Copyright 2022 | All rights reserved MediLight</p>
            </div>
        </Container>
    );
};

export default Footer;