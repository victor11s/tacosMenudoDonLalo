import React from 'react'


import { Col, Row } from 'react-bootstrap'
import FoodCard from './FoodCard'

export default function FoodCards() {
    return (
        <div>
            <Row>
                <Col className='d-flex justify-content-center my-auto'>
                    <h2>Tacos y Caldos</h2>

                </Col>
            </Row>
            <Row className='m-3'>
                <Col>
                    <FoodCard />
                </Col>
                <Col>
                    <FoodCard />
                </Col>
                <Col>
                    <FoodCard />
                </Col>
            </Row>


        </div>
    )
}
