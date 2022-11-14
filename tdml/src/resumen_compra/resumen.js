import { Row, Col, Container, Card,Table } from 'react-bootstrap'

import { Component } from 'react'

import DefaultNavbar from '../globalComponents/defaultNavbar';


import MetodoPago from './componentsResumen/MetodoPago';
import ResumenCard from './componentsResumen/ResumenCard';


export default class Resumen extends Component {
    render() {
        return (
            <div>
                <DefaultNavbar />
                <Container>
                <Row>
                    <Col sm={12}>
                        <Row className='m-5'>
                            <Col className='d-flex justify-content-center my-auto'>
                                <h1>Resumen de Compra</h1>
                            </Col>
                        </Row>
                        <ResumenCard/>
                        <MetodoPago/>
                        <Container className='d-flex justify-content-center py-3'>
                        <button className='btn btn-light ms-5' >Comprar</button>
                        </Container>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}