import React from 'react'

export default function BotonesInicio() {
    return (
        <div>
            <Nav.Link href="/login">
                <Button variant="light">Iniciar sesión</Button>
            </Nav.Link>
            <Nav.Link href="/signin">
                <Button variant="outline-secondary">Registrarse</Button>
            </Nav.Link>
        </div>
    )
}
