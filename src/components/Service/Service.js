import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const Service = (props) => {
    const { img, name, des } = props.photo;
    return (
        <div>

            <Card className='h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {des}
                    </Card.Text>
                    <Button className="btn btn-outline-primary mt-3">More Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;