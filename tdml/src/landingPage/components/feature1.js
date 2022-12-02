import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import taco from './images/taconSF.png'
import mapa from './images/dirección.PNG'

import Feature2 from './Feature2'
import Footer from './footer'

export default function Feature1() {
    return (
        <div >

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
                <Col className="d-flex  justify-content-center my-auto" Style={"background: #E65940; padding: 10px"}>
                    <Container Style={"text-align: center"}>
                        <Row >
                            <h1 className="display-1 lh-1 mb-3 TextoBlanco">Tacos y Menudo</h1>
                            <h1 className="display-2 lh-6 mb-3 TextoBlanco"><b>Don Lalo</b></h1>

                            <h3 class="display-6 lh-6 TextoBlanco">
                                Tradición familiar de la comida hacia las mesas mexicanas.
                                <br/>
                                Consiéntente con nuestros deliciosos tacos.
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
            <Row className="p-1">
                <Col className="d-flex  justify-content-center my-auto" Style={"padding: 10px"}>
                    <Container Style={"text-align: center"}>
                        <Row >
                            <h3 className="display-6 lh-6 mb-3" >Dirección</h3>
                            <a href="https://www.google.com/maps/dir/25.7354571,-100.3983982/Calle+Alejandro+de+Rodas+a,+Cumbres+5o.+Sector+Secci%C3%B3n,+64349+Monterrey,+N.L./@25.734684,-100.4682643,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8662970fb407924b:0xd3fbb2880d844880!2m2!1d-100.3982182!2d25.7347087">
                                <img src={mapa} class="rounded mx-auto d-block w-75"></img>
                            </a>
                            <h3 class="display-6 lh-6">
                                Calle Av Pedro Infante, Colonial Cumbres, 64349 Monterrey, N.L.
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
