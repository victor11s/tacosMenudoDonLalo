import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'

import taco from './images/taconSF.png'
import platoSF from './images/tacosss.jpg'

export default function Feature2() {
    return (
        <div>
            <Row className="p-5">
                


                <Col>
                    <img className="rounded mx-auto d-flex align-items-end" src={taco} Style={"max-width : 100%; margin-top: 100% "} alt="Imagen de lata Ener-G Ultra" />

                </Col>

                <Col>
                    <img src={platoSF} Style={"max-width: 100%; margin-top:10% "}  />

                </Col>



            </Row>
        </div>
    )
}
