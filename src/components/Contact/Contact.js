import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
            <h1 className='fs-1 text-center fw-bold my-5'>Contact Us</h1>
            <Row>
                <Col md={6} className='mb-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your Number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Leave a Message....</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Write a Message" />
                    </Form.Group>
                    <button className="btn btn-outline-primary">Send</button>
                </Form>
                </Col>
                <Col md={6} className='mb-5'>
                <h3 className='fs-5 fw-bold mb-3'>Address</h3>
                <p className='ml-5'>Medi Light</p>
                <p className='ml-5'>Mirpur-1, Dhaka.</p>
                <p className='ml-5'>Banlgadesh.</p>
                <p className='ml-5'>Phone:+91 9159669599</p>
                <p className='ml-5'>Email:contact@medilight.com</p>
                <p className='ml-5'>www.medilight.com</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;