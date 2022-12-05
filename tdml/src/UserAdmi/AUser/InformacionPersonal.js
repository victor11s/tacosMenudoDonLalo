import React, { Component } from 'react'
import Axios from 'axios';
import { Button, Form, Modal } from 'react-bootstrap'


export default class InformacionPersonal extends Component {
    ligaAxios = 'http://localhost:3001/api/';

    /* Insertar datos que se piden de la BD */
    state = {
        form: {
            "nombre_usuario": this.props.nombre,
            "calle": this.props.direccion,
        },
        showModal: false
    }

    
    handleChange = async e => {
        await this.setState({
            form:
            {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        
        return (
            <Form onSubmit={this.handleSubmit}>
                    
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control name="nombre_usuario" type="text" placeholder="Introduce tu Nombre en Editar Informacion"
                            defaultValue={this.props.nombre} onChange={this.handleChange} disabled/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formNumber">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control name="calle" type="text" placeholder="Introduce tu Calle en Editar Informacion"
                            defaultValue={this.props.direccion} onChange={this.handleChange} disabled />
                    </Form.Group>
            </Form>
        )
    }
}