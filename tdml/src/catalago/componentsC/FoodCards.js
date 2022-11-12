import React from 'react'


import {Col, Row} from 'react-bootstrap'
import FoodCard from './FoodCard'

export default function FoodCards() {
  return (
    <div>
        <Row className='m-3'>
            <Col>
                <FoodCard/>
            </Col>
            <Col>
                <FoodCard/>
            </Col>
            <Col>
                <FoodCard/>
            </Col>
        </Row>


    </div>
  )
}
