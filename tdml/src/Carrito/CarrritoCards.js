

import Axios from 'axios';
import React, { useState , Component} from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'

import CarritoCard from './CarritoCard';

import tacos from './images/tacos-2.jpg'
import menudo from './images/menudo.jpg'

export default class CarrritoCards extends Component {

    ligaAxios = 'http://localhost:3001/api/';


    state = {
        form: {
            "cant": ""
            
        },
        showModal: false
    }

    handleChange = async e => {
        await this.setState({
            form:
            {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }


  render() {
    return (
      <div>
        <Row className='m-3 BordeNegro'>
            <Col>
                <CarritoCard/>
            </Col>
        </Row>

      </div>
    )
  }
}
