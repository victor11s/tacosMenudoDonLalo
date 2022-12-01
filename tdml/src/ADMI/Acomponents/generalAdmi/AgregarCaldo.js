import React, { Component } from 'react'
import Axios from 'axios';
import { Button, Form, Modal } from 'react-bootstrap'

export default class AgregarCaldo extends Component {
    ligaAxios = 'http://localhost:3001/api/';

    /* Insertar datos que se piden de la BD */
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


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                    
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Nombre del Producto</Form.Label>
                        <Form.Control name="nombre_usuario" type="text" placeholder="Introduce tu Producto"
                            defaultValue={"Taco de "} onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formNumber">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control name="descripcion" type="text" placeholder="Introduce la decripcion"
                            defaultValue={"Rico taco de"} onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Costo</Form.Label>
                        <Form.Control name="costo" type="number" placeholder="Introduce el costo"
                            defaultValue={"$"} onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control name="stock" type="number" placeholder="Introduce el Stock"
                            defaultValue={"..."} onChange={this.handleChange} required />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Agregar Caldo
                    </Button>

            </Form>
        )
    }
}
