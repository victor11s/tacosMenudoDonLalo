import React from 'react'

import { Card, ListGroup, Row, Col, Button, Form, Nav, Container, Tab, Tabs } from 'react-bootstrap'

import DefaultNavbar from '../globalComponents/defaultNavbar'

import CarrritoCards from './CarrritoCards'

export default function MainCarrito(props) {
    return (
        <div>
            <DefaultNavbar />

            <Container >

                <Row className="d-flex justify-content-center m-5">
                    <Col className='d-flex justify-content-center my-auto'>
                        <h1>Carrito</h1>
                    </Col>
                </Row>


                <Container className='FondoBlanco BordeNegro '>
                    <Row className='m-1'>
                        <CarrritoCards />
                    </Row>


                    <Row>
                        <Col className='d-flex justify-content-center my-auto mb-2'>
                            <h1 id={'total-label'}>Total:{props.total}</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="d-grid gap-2 mb-3">
                            <Button variant="success" size="lg">
                                Pagar
                            </Button>
                        </Col>
                    </Row>


                </Container>



            </Container>






        </div>
    )
}
