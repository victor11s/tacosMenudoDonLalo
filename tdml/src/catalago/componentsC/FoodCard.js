import React from 'react'


import { Card, ListGroup, Row, Col, Button, Form } from 'react-bootstrap'

import tacos from './images/tacos.jpg'


export default function FoodCard() {
    return (
        <div>

            <Card style={{ width: '18rem' }} className='square border border-3 square border border-secondary'>
                <Card.Img src={tacos} className='img-fluid ' />
                <Card.Body>
                    <Card.Title>Tacos de Chicharron</Card.Title>
                    <Card.Text>
                        Deliciosa carne de Res
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush text-end square border border-2">
                    <ListGroup.Item >Precio: <strong>$18</strong></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Row className='p-1'>
                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option>Selecciona tu tortilla</option>
                                <option value="1">Maiz</option>
                                <option value="2">Harina</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className='p-1'>
                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option>Selecciona la cantidad</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>

                            </Form.Select>
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
