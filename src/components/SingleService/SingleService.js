import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleService = () => {
   
    return (
        <Container>
            <Row>
                <h1 className='fs-1 text-center fw-bold my-5'>
                    This is Service 
                </h1>
            </Row>
        </Container>
    );
};

export default SingleService;