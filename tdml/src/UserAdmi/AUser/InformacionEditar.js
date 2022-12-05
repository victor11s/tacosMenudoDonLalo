import React, { Component } from 'react'
import Axios from 'axios';
import { Button, Form, Modal } from 'react-bootstrap'

export default class InformacionEditar extends Component {
    ligaAxios = 'http://localhost:3001/api/';

    /* Insertar datos que se piden de la BD */
    state = { 
        form: {
            "id": this.props.nombre_usuario,
            "nombre_usuario": this.props.nombre,
            "calle": this.props.direccion
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

    handleSubmit = async e => {
        e.preventDefault();
        await Axios.post((this.ligaAxios + 'updateUser'),
            {
                nombre_usuario : this.state.form.id,
                nombre: this.state.form.nombre_usuario,
                direccion: this.state.form.direccion
            }).then(async res => {
                let authorization = res.data;
                if (authorization) {
                    alert("Se ha cambiado la información");
                } else {
                    alert("No se ha cambiado la información");
                }

            })
    }


    render() {
        console.log(this.props.nombre_usuario);
        return (
            <Form onSubmit={this.handleSubmit} className='mb-3'>
                    
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control name="nombre_usuario" type="text" placeholder="Introduce tu Nombre"
                            defaultValue={this.props.nombre} onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formNumber">
                        <Form.Label>Calle</Form.Label>
                        <Form.Control name="calle" type="text" placeholder="Introduce tu Calle"
                            defaultValue={this.props.direccion} onChange={this.handleChange} required />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Cambiar
                    </Button>

            </Form>
        )
    }
}
