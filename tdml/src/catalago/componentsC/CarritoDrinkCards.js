import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'

import CarritoDrinkCard from './CarritoDrinkCard'

export default function CarritoDrinkCards() {
  return (
    <div>
        <Row className='m-1'>
            <Col>
                <CarritoDrinkCard />
            </Col>
            
        </Row>
    </div>
  )
}
