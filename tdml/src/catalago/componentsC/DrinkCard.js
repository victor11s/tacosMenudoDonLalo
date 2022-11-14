import React from 'react'


import { Card, ListGroup, Row, Col, Button } from 'react-bootstrap'

import coca from './images/cocaSF.png'

import NumericInput from 'react-numeric-input';


export default function DrinkCard() {
    return (
        <div>

            <Card style={{ width: '15rem' }} className='square rounded-5 border-secondary mb-4'>
                <img src={coca} />
                <Card.Body>
                    <Card.Title>Coca Cola 355ml</Card.Title>
                    <Card.Text>
                        Deliciosa bebida Coca Cola
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush text-end square border border-2">
                    <ListGroup.Item >Precio: <strong>$18</strong></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    
                    <Row className='p-1'>
                        <Col>
                            <p>Cantidad:</p>
                            <NumericInput min={0} max={10} value={1} size={1} />
                        </Col>
                    </Row>

                    <Row>
                        <Col className='d-grid gap-2 p-1 m-1'>
                            <Button variant="warning" size='lg'>Agregar</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>


        </div>
    )
}

