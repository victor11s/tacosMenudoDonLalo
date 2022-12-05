import React from 'react'

import { Card, ListGroup, Row, Col, Button, Form, Nav, Container, Tab, Tabs } from 'react-bootstrap'

import DefaultNavbar from '../../../globalComponents/defaultNavbar'

import Editar from './Editar'
import Agregar from './Agregar'

import Footer from '../../../landingPage/components/footer'




export default function Administrar() {

    

        return (
            <div>
                <DefaultNavbar />

                <Container className='mb-3'>

                    <Row className="d-flex justify-content-center m-5">
                        <Col className='d-flex justify-content-center my-auto'>
                            <h1>Administracion de Productos</h1>
                        </Col>
                    </Row>

            
                    <Row className="d-flex justify-content-center m-5 FBBN">
                        <Tabs
                            defaultActiveKey="taco"
                            id="ControlledTabsExample"
                            className="mb-3"
                            justify
                            
                        >
                            <Tab eventKey="taco" title="Agregar" >
                                <Agregar />
                            </Tab>

                            <Tab eventKey="editar" title="Editar">
                                <Editar />
                            </Tab>

                        </Tabs>
                    </Row>

                </Container>






            </div>
        )
    }
