import React, { Component } from 'react'
import Axios from 'axios';
import { Button, Form, Modal } from 'react-bootstrap'

export default class InformacionEditar extends Component {
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
            <Form onSubmit={this.handleSubmit} className='mb-3'>
                    
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control name="nombre_usuario" type="text" placeholder="Introduce tu Nombre"
                            defaultValue={""} onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formNumber">
                        <Form.Label>Calle</Form.Label>
                        <Form.Control name="calle" type="text" placeholder="Introduce tu Calle"
                            defaultValue={""} onChange={this.handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Numero de Calle</Form.Label>
                        <Form.Control name="costo" type="number" placeholder="Introduce tu Numero de Calle"
                            defaultValue={""} onChange={this.handleChange} required/>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Cambiar
                    </Button>

            </Form>
        )
    }
}
