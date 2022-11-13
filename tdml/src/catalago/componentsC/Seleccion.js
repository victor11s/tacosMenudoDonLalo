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
                <Col className="m-5">
                    <h5>
                        Selecciona tu categoria
                    </h5>


                    <Nav defaultActiveKey="/home" className="flex-column">

                        <Nav.Link href="/home" eventKey="link-1">Tacos y Caldos</Nav.Link>
                        <Nav.Link href="/home" eventKey="link-2">Bebidas</Nav.Link>
                    </Nav>



                </Col>
            </Row>

        </div>
    )
}
