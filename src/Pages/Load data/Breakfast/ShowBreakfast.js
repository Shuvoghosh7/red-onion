import React from 'react';
import { Card, Container } from 'react-bootstrap';

const ShowBreakfast = ({ breakf }) => {
    const { picture, name, price } = breakf
    return (
        <div className='col-12 col-md-6 col-lg-4 g-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price:${price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
};

export default ShowBreakfast;