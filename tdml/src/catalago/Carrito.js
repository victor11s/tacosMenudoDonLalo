

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import carrito from '../globalComponents/components/images/carrito.png'

import CarritoFoodCard from './componentsC/CarritoFoodCard';


export default function Carrito() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="ligth" onClick={handleShow}>
                <img src={carrito} alt="" width="40" />
            </Button>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <CarritoFoodCard />    
                </Offcanvas.Body>
            </Offcanvas>

            
        </div>
    )
}


