
import React, { Component } from 'react'
import Axios from 'axios';
import { Button, Form } from 'react-bootstrap'


export default class LoginForm extends Component {


    state = {
        form: {
            "nombre_usuario": "",
            "password": ""
        }
    }

    handleChange = async e => {
        await this.setState({
            form:
            {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form);
    }

    ligaAxios = 'http://localhost:3001/api/';

    handleSubmit = async e => {
        e.preventDefault();
        await Axios.post((this.ligaAxios+'login'),
        {
            nombre_usuario: this.state.form.nombre_usuario,
            password: this.state.form.password
        }).then(res => {
            console.log(res.data);
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <legend>
                    Iniciar Sesión
                </legend>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control name="nombre_usuario" type="email" placeholder="Introduce tu email" 
                    defaultValue={"prueba@udem.edu"} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Contraseña" 
                    defaultValue={666} onChange={this.handleChange} />
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
