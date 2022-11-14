import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'

import CarritoDrinkCard from './CarritoDrinkCard'

export default function CarritoDrinkCards() {
  return (
    <div>
        <Row >
            <Col>
                <CarritoDrinkCard />
            </Col>
            <Col>
                <CarritoDrinkCard />
            </Col>
        </Row>
    </div>
  )
}
