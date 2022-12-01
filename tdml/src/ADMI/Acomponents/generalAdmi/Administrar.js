import React from 'react'

import { Card, ListGroup, Row, Col, Button, Form, Nav, Container, Tab, Tabs } from 'react-bootstrap'

import DefaultNavbar from '../../../globalComponents/defaultNavbar'

import Editar from './Editar'
import Agregar from './Agregar'
import AgregarCaldo from './AgregarCaldo'
import AgregarBebida from './AgregarBebida'

export default function Administrar() {
    return (
        <div>
            <DefaultNavbar />

            <Container>

                <Row className="d-flex justify-content-center m-5">
                    <Col className='d-flex justify-content-center my-auto'>
                        <h1>Administracion de Productos</h1>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center m-5">
                    <Tabs
                        defaultActiveKey="profile"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                    >
                        <Tab eventKey="taco" title="Agregar Tacos">
                            <Agregar />
                        </Tab>
                        <Tab eventKey="caldo" title="Agregar Caldos">
                            <AgregarCaldo />
                            
                        </Tab>
                        <Tab eventKey="bebida" title="Agregar Bebida">
                            <AgregarBebida />
                        </Tab>
                        <Tab eventKey="editar" title="Editar">
                            <Editar/>
                        </Tab>
                        
                    </Tabs>
                </Row>

            </Container>




        </div>
    )
}
