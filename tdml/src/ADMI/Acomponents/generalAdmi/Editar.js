import React, { Component } from 'react'
import Axios from 'axios';

import { Modal, Button } from 'react-bootstrap';


export default class Editar extends Component {

    ligaAxios = 'http://localhost:3001/api/';

    /* Insertar datos que se piden de la BD */
    state = {
        form: {
            "nombre_usuario": "",
            "password": "",
        },
            showModal: false
  
    }

    onClickButton = e => {
        e.preventDefault();
        this.setState({ showModal: true });
    }

    onClose = e => {
        e.preventDefault();
        this.setState({ showModal: false });
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
            <div class="table-responsive FondoBlanco">
                <table class="table table-striped table-hover table-bordered border-warning">
                    <thead>
                        <tr>
                            <th scope="col">Nombre del Producto</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Costo</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Opciones</th>



                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Taco de Frijol</th>
                            <td>Rico taco de Frijol</td>
                            <td>$20</td>
                            <td>10</td>
                            <td><button  className="btn btn-primary m-1" onClick={this.onClickButton}>Editar</button>
                            <button type="button" class="btn btn-danger">Eliminar</button></td>


                        </tr>

                    </tbody>

                </table>

                <Modal open={this.state.showModal} onClose={this.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>


            </div>

        )
    }
}
