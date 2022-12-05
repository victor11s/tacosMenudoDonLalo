import React from 'react'

import { Card, ListGroup, Row, Col, Button, Form, Nav, Container, Tab, Tabs, NavLink } from 'react-bootstrap'

import DefaultNavbar from '../globalComponents/defaultNavbar'

import CarrritoCards from './CarrritoCards'

import Paypal from './Paypal'

export default function MainCarrito(props) {
    let estadoBoton = '';
    let nombre_usuario = localStorage.getItem('nombre_usuario');
    //state para el total a pagar
    const [total, setTotal] = React.useState(0);
    //Handler para actualizar el total
    const actualizarTotal = async (total) => {
        await setTotal(total);
        console.log(total);
        //window.location.reload();
    }
    {total==0 ? estadoBoton = true : estadoBoton = false}
    return (
        <div>
            <DefaultNavbar />

            <Container >

                <Row className="d-flex justify-content-center m-5">
                    <Col className='d-flex justify-content-center my-auto'>
                        <h1>Carrito</h1>
                    </Col>
                </Row>


                <Container className='FondoBlanco BordeNegro '>
                    <Row className='m-1'>
                        <CarrritoCards actualizarTotal={actualizarTotal} />
                    </Row>


                    <Row>
                        <Col className='d-flex justify-content-center my-auto mb-2'>
                            <h1 id={'total-label'}>Total:{total}</h1>
                        </Col>
                    </Row>

                    <Row>
                        {/* Boton para hacer el check out: */}
                        <Button className='mx-3' variant='danger' disabled={estadoBoton}>
                            <NavLink href={`/checkout/${nombre_usuario}/${total}/`}>Proceder pago</NavLink> 

                        </Button>
                    </Row>


                </Container>



            </Container>






        </div>
    )
}
