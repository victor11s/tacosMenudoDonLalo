import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

export default class SinginForm extends Component {
    render() {
        return (
            <Form>
                <legend>
                    Registrate
                </legend>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Introduce tu email" value={"prueba@udem.edu"} />
                    <Form.Text className="text-muted">
                        No compartiremos tu correo con nadie más.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword1">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" value={666} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword2">
                    <Form.Label>Repetir contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Repetir contraseña" value={666} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrarme
                </Button>
            </Form>
        )
    }
}
