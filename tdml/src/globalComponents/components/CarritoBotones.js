import React from 'react'
import carrito from './images/carrito.png'
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';


import MainCarrito from '../../Carrito/MainCarrito';

let nombre_usuario = localStorage.getItem('nombre_usuario');

function logout(){
    localStorage.removeItem('logged');
    localStorage.removeItem('nombre_usuario');
    window.open("/catalogo", "_self");
}
//funcion constante con el boton para administrar
const BotonAdmin = () => {
    return (
        <Nav.Link href="/administrar">
            <Button variant="outline-secondary">Administrar</Button>
        </Nav.Link>
    )
}

//funcion constante para el boton de carrito
const BotonCarrito = () => {
    
    return (
        <Nav.Link href="/carrito">
            <img src={carrito} alt="carrito" width="30px" height="30px" />
        </Nav.Link>
        
    )
}

export default function CarritoBotones() {
  return (
    <div Style={"width: match-parent; text-align: right;"}>
            <Nav className="me-auto aling ">
                
                <Nav.Link Style='max-width:40%'>
                    
                </Nav.Link>
                <Nav.Link className="d-inline-block align-text-middle">
                    <Button variant="light" onClick={logout}>Cerrar sesión</Button>

                </Nav.Link>
                {nombre_usuario=='prueba@udem.edu' ? <BotonAdmin/> : null}
                <Nav.Link href="/administrarUser">
                    <Button variant="outline-secondary">Mi Perfil</Button>
                </Nav.Link>
                
                {nombre_usuario!='prueba@udem.edu' ? <BotonCarrito/> : null}
            </Nav>

            
        </div >
  )
}
