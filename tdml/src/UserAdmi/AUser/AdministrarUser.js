import React from 'react'
import InformacionPersonal from './InformacionPersonal'
import InformacionEditar from './InformacionEditar'

import { Card, ListGroup, Row, Col, Button, Form, Nav, Container, Tab, Tabs } from 'react-bootstrap'
import DefaultNavbar from '../../globalComponents/defaultNavbar'

export default function AdministrarUser() {
  return (
    <div>
            <DefaultNavbar />

            <Container>

                <Row className="d-flex justify-content-center m-5">
                    <Col className='d-flex justify-content-center my-auto'>
                        <h1>Administra tus Datos</h1>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center m-5 FBBN">
                    <Tabs
                        defaultActiveKey="profile"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                    >
                        <Tab eventKey="PersonalInfo" title="Informacion Personal">
                            <InformacionPersonal/>
                        </Tab>
                        <Tab eventKey="EditPersonalInfo" title="Editar Información">
                            <InformacionEditar/>
                        </Tab>
                    
                        
                    </Tabs>
                </Row>

            </Container>




        </div>
  )
}
