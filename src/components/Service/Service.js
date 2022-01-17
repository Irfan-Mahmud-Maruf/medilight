
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { Id, img, name, des } = props.photo;
    return (
        <div>

            <Card className='h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {des}
                    </Card.Text>
                    <Link to={`/service/${Id}`} className="btn btn-outline-primary mt-3">See Services Details</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;