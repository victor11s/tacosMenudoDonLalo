import React from 'react'

import { Card, ListGroup, Row, Col, Button, Form, Nav } from 'react-bootstrap'



export default function Seleccion() {
    return (
        <div>

            <Row className="d-flex justify-content-center m-5">
                <Col>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center m-5">
                <Col>
                </Col>
            </Row>
            <Row>
                <Col className="m-5 BordeNegro" >
                    <h5>
                        Selecciona tu categoría
                    </h5>


                    <Nav defaultActiveKey="/home" className="flex-column">

                        <Nav.Link href="#tyc" eventKey="link-1">Tacos y Caldos</Nav.Link>
                        <Nav.Link href="#bebidas" eventKey="link-2">Bebidas</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </div>
    )
}
