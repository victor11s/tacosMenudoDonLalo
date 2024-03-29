import { Row, Col, Container } from 'react-bootstrap'
import { Component } from 'react'
import DefaultNavbar from '../globalComponents/defaultNavbar';
import FoodCards from './componentsC/FoodCards';
import DrinkCards from './componentsC/DrinkCards';
import Seleccion from './componentsC/Seleccion';

import Footer from '../landingPage/components/footer';






export default class Catalogo extends Component {
    render() {
        return (
            <div>
                <DefaultNavbar />
                <Container className="BordeNegro2 mb-3">
                    <Row>
                        <Col sm={3}>
                            <div className="sticky">
                                <Seleccion />
                            </div>
                        </Col>
                        <Col sm={9}>
                            <Row className='m-5'>
                                <Col className='d-flex justify-content-center my-auto'>
                                    <h1>Nuestros Productos</h1>
                                </Col>
                            </Row>
                            <Container>
                                <Row >
                                    <div id="tyc" >
                                        <FoodCards />
                                    </div>
                                    <div id="bebidas">
                                        <DrinkCards />
                                    </div>


                                </Row>
                            </Container>
                        </Col>
                    </Row>

                    
                </Container>

                <Footer></Footer>
            </div>
        );
    }
}   