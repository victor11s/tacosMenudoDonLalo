import React, { Component } from 'react'
import Axios from 'axios';
import { Button, Form, Modal } from 'react-bootstrap'


export default class SigninForm extends Component {

    ligaAxios = 'http://localhost:3001/api/';

    state = {
        form: {
            "nombre_usuario": "",
            "password": "",
            "password_confirm": "",
            "direccion": "",
            "nombre": "",
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
        if (this.state.form.nombre_usuario !== "" && this.state.nombre_usuario !== "") {
            await Axios.post((this.ligaAxios + 'signin'),
                {
                    nombre_usuario: this.state.form.nombre_usuario,
                    password: this.state.form.password,
                    direccion: this.state.form.direccion,
                    nombre: this.state.form.nombre
                }).then(async res => {
                    let authorization = res.data;
                    //console.log(authorization);
                    if (authorization) {
                        alert("Registro de usuario exitoso")
                    } else {
                        alert("El nombre de usuario ya está registrado")
                    }

                })

        } else {
            alert("Llene correctamente todos los campos")
        }
    }

    handleClose = async e => {
        await this.setState({
            showModal: false
        });
        window.open("/login", "_self");
    }

    handleShow = async e => {
        await this.setState({
            showModal: true
        });
    }

    render() {
        return (
            <>
                {/* Modal mostrado en caso de registro existoso */}
                <Modal
                    show={this.state.showModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Usuario registrado
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            El registro de usuario ha sido exitoso.<br /> Inicie sesión con su cuenta.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Continuar</Button>
                    </Modal.Footer>
                </Modal>
                {/* Termina modal oculto */}
                <Form onSubmit={this.handleSubmit}>
                    <legend>
                        Registrate
                    </legend>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control name="nombre_usuario" type="email" placeholder="Introduce tu email"
                            defaultValue={""} onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword1">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Contraseña"
                            defaultValue={""} onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword2">
                        <Form.Label>Repetir contraseña</Form.Label>
                        <Form.Control name="password_confirm" type="password" placeholder="Repetir contraseña"
                            defaultValue={""} onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formNombre">
                        <Form.Label>Calle y Número</Form.Label>
                        <Form.Control name="nombre" type="text" placeholder="Nombvre y apellido"
                            defaultValue={""} onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Calle y Número</Form.Label>
                        <Form.Control name="direccion" type="text" placeholder="Dirección"
                            defaultValue={""} onChange={this.handleChange} required />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit} >
                        Registrarme
                    </Button>
                </Form>
            </>
        )
    }
}
