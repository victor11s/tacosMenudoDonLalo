import React from 'react'


import { Row, Col, Button } from 'react-bootstrap'


import { Card, ListGroup, Form } from 'react-bootstrap'

import coca from '../componentsC/images/cocaSF.png'

import NumericInput from 'react-numeric-input';

export default function CarritoDrinkCard() {
  return (
    <div>
        <Row className={'square border border-3 border-dark'}>
                <Col md={2}>
                    <img src={coca} Style={'max-width: 50px; margin-top:60%'} />
                </Col>
                <Col md={4}>
                    <h5>Coca Cola 355ml</h5>
                    <p>Precio: <strong>$18</strong></p>
                </Col>
                <Col md={6}>
                    <p>Cantidad:</p>
                    <NumericInput min={0} max={10} value={1} size={1} />
                    
                </Col>
                

            </Row>

        {/* <Card style={{ width: '10rem' }} className='square rounded-5 border-secondary m-1'>
                <img src={coca} />
                <Card.Body>
                    <Card.Title>Coca Cola 355ml</Card.Title>
                    
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
                            <Button variant="danger" size='lg'>Eliminar</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card> */}
    </div>
  )
}
