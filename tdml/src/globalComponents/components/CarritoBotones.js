import React from 'react'
import carrito from './images/carrito.png'
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';

import Carrito from '../../catalago/Carrito';

import MainCarrito from '../../Carrito/MainCarrito';

function logout(){
    localStorage.removeItem('logged');
    localStorage.removeItem('nombre_usuario');
    document.location.reload();
}

export default function CarritoBotones() {
  return (
    <div Style={"width: match-parent; text-align: right;"}>
            <Nav className="me-auto aling ">
                
                <Nav.Link Style='max-width:40%'>
                    <Carrito/>
                </Nav.Link>
                <Nav.Link className="d-inline-block align-text-middle">
                    <Button variant="light" onClick={logout}>Cerrar sesión</Button>
                </Nav.Link>
            </Nav>

            
        </div >
  )
}
