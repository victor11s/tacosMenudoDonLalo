import React from 'react'

import { Card, ListGroup, Row, Col, Button, Form, Nav, Container, Tab, Tabs } from 'react-bootstrap'

import DefaultNavbar from '../../../globalComponents/defaultNavbar'

import Editar from './Editar'

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
                        <Tab eventKey="home" title="Agregar">

                        </Tab>
                        <Tab eventKey="profile" title="Editar">
                            <Editar/>

                        </Tab>
                        
                    </Tabs>
                </Row>

            </Container>




        </div>
    )
}
