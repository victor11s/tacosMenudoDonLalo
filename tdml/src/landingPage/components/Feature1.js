import React from 'react'

import {Row, Col} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import taco from './images/taconSF.png'

export default function Feature1() {
  return (
    <div>
                <Row className="p-5">
                    <Col className="d-flex  justify-content-center">
                        <Col className="my-auto d-flex  justify-content-center">
                            <Container>
                                <Row>
                                    <h1 class="display-1 lh-1 mb-3 d-flex align-items-center">Ener-G ULTRA</h1>
                                    {/* /<p class="lead fw-normal text-muted mb-5 d-flex align-items-center justify-content-center">Feel the Power</p>/ */}
                                </Row>
                                <Row>
                                    <div>
                                        
                                        <button to="/catalogo"
                                            type="button"
                                            className="btn btn-danger text-white p-10 align-self-start ml-auto">
                                                <Link to="/catalogo">
                                                    Conoce Más
                                                </Link>
                                        </button>
                                    </div>
                                </Row>
                            </Container>
                        </Col>

                    </Col>
                    <Col>
                        <img class="rounded mx-auto d-block" src={taco} style={{maxHeight: '30rem'}} alt="Imagen de lata Ener-G Ultra" />
                    </Col>
                </Row>
            </div>
  )
}
