import React from 'react'


import { Card, ListGroup, Row, Col, Button, Form } from 'react-bootstrap'

import tacos from './images/tacos.jpg'

import NumericInput from 'react-numeric-input';


export default function FoodCard(props) {

    const tipo = props.tipo;

    const boton = () => {
        return (
            <Row className='p-1'>
                        <Col>
                            <Form.Select name='tortilla' aria-label="Default select example" id='select' onLoad={disableSelect} >
                                <option>Selecciona tu tortilla</option>
                                <option value="Maiz">Maiz</option>
                                <option value="Harina">Harina</option>
                            </Form.Select>
                        </Col>
                    </Row>
        )
    }

    /* Funcion para deshabilitar el select*/
    function disableSelect() {
        if (props.tipo === 'Caldos') {
            document.getElementById("select").disabled = true;
        }
        
    }



    return (
        <div>
            <Card style={{ width: '15rem'}} className='square rounded-5 border-secondary mb-4'>
                <Card.Img src={props.imagen} />
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>
                        {props.descripción}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush text-end square border border-2">
                    <ListGroup.Item >Precio: <strong>${props.precio}</strong></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    {tipo==='Tacos' ? boton() : null}

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
