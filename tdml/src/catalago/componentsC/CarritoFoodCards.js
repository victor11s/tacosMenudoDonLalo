import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'

import CarritoFoodCard from './CarritoFoodCard'

export default function CarritoFoodCards() {
  return (
    <div>
        <Row className='m-1'>
            <Col>
                <CarritoFoodCard />
            </Col>
            
        </Row>
    </div>
  )
}
