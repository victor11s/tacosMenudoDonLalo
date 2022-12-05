import React from 'react'

import { Card, ListGroup, Row, Col, Button, Form } from 'react-bootstrap'
import imagenAguas from './images/aguas.jpeg'
import tacos from './images/tacos.jpg'


import NumericInput from 'react-numeric-input';

export default function CarritoCard(props) {
    let imagenFinal;
    props.tipo == "bebida" ? imagenFinal = imagenAguas : imagenFinal = tacos;


    //constante para guardar un select
    const selectTortilla = <Row className='p-1'>
        <Col>
            <Form.Select name='tortilla' aria-label="Default select example">
                <option>Selecciona tu tortilla</option>
                <option value="Maiz">Maiz</option>
                <option value="Harina">Harina</option>
            </Form.Select>
        </Col>
    </Row>
    return (
        <div>
            <Card style={{ width: '15rem' }} className='square rounded-5 border-secondary mb-4'>
                <Card.Img src={imagenFinal} />
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>
                        {props.descripcion}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush text-end square border border-2">
                    <ListGroup.Item >Precio: <strong>${props.precio}</strong></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    {props.tipo == "bebida" ? null : selectTortilla}

                    <Row className='p-1'>
                        <Col>
                            <p>Cantidad:</p>
                            <NumericInput min={0} max={100} value={props.cantidad} size={1} />
                        </Col>
                    </Row>

                    <Row>
                        <Col className='d-grid gap-2 p-1 m-1'>
                            <Button variant="danger" size='lg'>Eliminar</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>


        </div>
    )
}
