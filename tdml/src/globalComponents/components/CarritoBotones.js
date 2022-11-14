import React from 'react'
import carrito from './images/carrito.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

import Carrito from '../../catalago/Carrito';

export default function CarritoBotones() {
  return (
    <div Style={"width: match-parent; text-align: right;"}>
            <Nav className="me-auto aling ">
                
                <Nav.Link Style='max-width:40%'>
                    <Carrito/>
                </Nav.Link>
                <Nav.Link href="/login" className="d-inline-block align-text-middle">
                    <Button variant="light" >Cerrar sesión</Button>
                </Nav.Link>
            </Nav>

            
        </div >
  )
}
