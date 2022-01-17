import React from 'react';
import { Card } from 'react-bootstrap';

const Doctor = (props) => {
    const { img, des, post, name, } = props.doctor;
    return (
        <div>
            <Card >
                <Card.Img variant="top" className='rounded' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{post}</p>
                        <p>{des}</p>
                        <button className="btn btn-primary mt-3">Details</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;