import React from 'react'

import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';

export default function BotonesInicio() {
    return (
        <div Style={"width: match-parent; text-align: right;"}>
            <Nav className="me-auto">
                <Nav.Link href="/login">
                    <Button variant="light">Iniciar sesión</Button>
                </Nav.Link>
                <Nav.Link href="/signin">
                    <Button variant="outline-secondary">Registrarse</Button>
                </Nav.Link>
            </Nav>
        </div >
    )
}
