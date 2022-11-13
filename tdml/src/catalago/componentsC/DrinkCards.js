import React from 'react'


import { Col, Row } from 'react-bootstrap'
import DrinkCard from './DrinkCard'

export default function DrinkCards() {
    return (
        <div>
            <Row>
                <Col className='d-flex justify-content-center my-auto'>
                    <h2>Bebidas</h2>

                </Col>
            </Row>
            <Row className='m-3'>
                <Col>
                    <DrinkCard />
                </Col>
                <Col>
                    <DrinkCard />
                </Col>
                <Col>
                    <DrinkCard />
                </Col>
            </Row>


        </div>
    )
}
