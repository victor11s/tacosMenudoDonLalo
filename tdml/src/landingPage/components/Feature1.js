import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import taco from './images/taconSF.png'

export default function Feature1() {
    return (
        <div className="TacosColor">
            <Row className="p-5">
                <Col>
                    <div>
                        

                    </div>

                    <img class="rounded mx-auto d-block" src={taco} Style={"max-height : 100rem; margin-top: 20%"} alt="Imagen de lata Ener-G Ultra" />
                </Col>
                <Col className="d-flex  justify-content-center my-auto" Style={"background: #E65940; padding: 10px"}>
                    <Container Style={"text-align: center"}>
                        <Row >
                            <h1 class="display-1 lh-1 mb-3">Tacos y Menudo</h1>
                            <h1 class="display-2 lh-6 mb-3"><b>Don Lalo</b></h1>
                            
                            <h3 class="display-6 lh-6 ">
                                Tradición familiar de la comida hacia las mesas mexicanas. Consiéntente con nuestros deliciosos tacos.  
                            </h3>
                        </Row>
                        <Row>
                            <Link to="/catalogo">
                            <Button variant="light" className='m-5'>
                                    Conoce Más
                                </Button>
                            </Link>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}
