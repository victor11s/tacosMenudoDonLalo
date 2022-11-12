import { Row, Col, Container } from 'react-bootstrap'

import { Component } from 'react'

import DefaultNavbar from '../globalComponents/defaultNavbar';

import FoodCards from './componentsC/FoodCards';






export default class Catalogo extends Component {
    render() {
        return (
            <div>
                <DefaultNavbar />

                <Row className='m-5'>
                    <Col className='d-flex justify-content-center my-auto'>
                        <h1>Nuestros Productos</h1>

                    </Col>
                </Row>

                <Container>
                    <Row >

                    <FoodCards/>
                    <FoodCards/>
                    
                    
                    </Row>



                    </Container>


            </div>
        );
    }
}   