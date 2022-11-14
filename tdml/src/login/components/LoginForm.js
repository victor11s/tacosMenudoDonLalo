
import React, { Component } from 'react'
import Axios from 'axios';
import { Button, Form, Modal } from 'react-bootstrap'

export default class LoginForm extends Component {

    ligaAxios = 'http://localhost:3001/api/';

    state = {
        form: {
            "nombre_usuario": "",
            "password": "",
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
        await Axios.post((this.ligaAxios + 'login'),
            {
                nombre_usuario: this.state.form.nombre_usuario,
                password: this.state.form.password
            }).then(async res => {
                let authorization = res.data;
                //console.log(authorization);
                if (authorization) {
                    localStorage.setItem("nombre_usuario", this.state.form.nombre_usuario);
                    localStorage.setItem("logged", true);
                    window.open("/", "_self");
                } else {
                    // this.handleShow();
                    // let modal = document.getElementById("modal");
                    // //modal.show = true;
                    // console.log(modal);
                    //alert("Nombre de usuario o contraseña inorrecta")
                    this.handleShow();
                }

            })
    }

    handleClose = async e => {
        await this.setState({
            showModal: false
        });
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
                    <Modal.Header closeButton onClick={this.handleClose}>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Nombre de usuario o contraseña incorrecto
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Verifique los datos insertados.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Continuar</Button>
                    </Modal.Footer>
                </Modal>
                {/* Termina modal oculto */}
                <Form onSubmit={this.handleSubmit}>
                    <legend>
                        Iniciar Sesión
                    </legend>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control name="nombre_usuario" type="email" placeholder="Introduce tu email"
                            defaultValue={"prueba@udem.edu"} onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Contraseña"
                            defaultValue={666} onChange={this.handleChange} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Iniciar Sesión
                    </Button>

                </Form>
            </>
        )
    }
}

