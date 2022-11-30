import React from 'react'

import { Row, Col, Button, Carousel } from 'react-bootstrap'

import taco from './images/taconSF.png'
import platoSF from './images/tacosss.jpg'

import car1 from './images/car1.jpg'
import car4 from './images/car4.jpg'
import car3 from './images/car3.jpg'



export default function Feature2() {
    return (
        <div>
            <Row className="p-5">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={car3}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>VEN A PROBAR</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={car4}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>LOS MEJORES TACOS</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={car1}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>SOLO AQUÍ</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>






            </Row>
        </div>
    )
}
