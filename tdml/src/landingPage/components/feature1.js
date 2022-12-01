import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import taco from './images/taconSF.png'

import Feature2 from './Feature2'

export default function Feature1() {
    return (
        <div className="TacosColor">

            <Row className='p-1 '>
                    <Button href="/catalogo" size="lg" className='ColorBoton'>
                        ORDENA YA!!!
                    </Button>
            </Row>
            <Row className="p-1">
                <Col>
                    <Feature2 />
                </Col>

            </Row>
            <Row className="p-1">
                <Col className="d-flex  justify-content-center my-auto" Style={"background: #1f37fb; padding: 10px"}>
                    <Container Style={"text-align: center"}>
                        <Row >
                            <h1 className="display-1 lh-1 mb-3 TextoBlanco">Tacos y Menudo</h1>
                            <h1 className="display-2 lh-6 mb-3 TextoBlanco"><b>Don Lalo</b></h1>

                            <h3 class="display-6 lh-6 TextoBlanco">
                                Tradición familiar de la comida hacia las mesas mexicanas. Consiéntente con nuestros deliciosos tacos.
                            </h3>
                        </Row>
                        <Row>
                            {/* <Link to="/catalogo">
                                <Button variant="light" className='m-5'>
                                    Conoce Más
                                </Button>
                            </Link> */}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}
