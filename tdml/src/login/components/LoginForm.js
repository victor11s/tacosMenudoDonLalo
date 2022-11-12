
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class LoginForm extends Component {
    render() {
        return (
            <Form>
                <legend>
                    Iniciar Sesión
                </legend>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Introduce tu email" value={"prueba@udem.edu"} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" value={666} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar Sesión
                </Button>
            </Form>
        )
    }
}

/** 
 
 import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function LoginForm() {
    return (
        <div>
            <Form>
                <legend>
                    Iniciar Sesión
                </legend>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Introduce tu email" value={"prueba@udem.edu"} />
                    <Form.Text className="text-muted">
                        No compartiremos tu correo con nadie más.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" value={666} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar Sesión
                </Button>
            </Form>
        </div>
    )
}
 
*/
