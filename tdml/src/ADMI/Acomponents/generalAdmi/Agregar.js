import React, { Component } from 'react'
import Axios from 'axios';
import { Button, Form, Modal } from 'react-bootstrap';


export default class Agregar extends Component {

    ligaAxios = 'http://localhost:3001/api/';

    /* Insertar datos que se piden de la BD */
    state = {
        form: {
            "nombre": "",
            "descripcion": "",
            "stock": "",
            "tipo": "",
            "precio_unitario": "",
            "imagen": ""
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
        }
        )
        /*Cuando es Caldo o Taco se deshabilita*/
        if (this.state.form.tipo == "Caldos") {

            document.getElementById("imagen").disabled = true;
            document.getElementById("imagen").value = './modal/img/menudo.jpg';
            this.setState({
                form:
                {
                    ...this.state.form,
                    "imagen": './modal/img/menudo.jpg'
                }
            })

        }
        else if (this.state.form.tipo == "Tacos") {
            document.getElementById("imagen").disabled = true;
            document.getElementById("imagen").value = './modal/img/tacos-2.jpg';
            this.setState({
                form: {
                    ...this.state.form,
                    "imagen": './modal/img/tacos-2.jpg'
                }
            })
        }

        else {
            document.getElementById("imagen").disabled = false;
        }
    }

    /*if select is a taco let default image*/


    handleSubmit = async e => {
        e.preventDefault();
        await Axios.post((this.ligaAxios + 'insert'),
            {
                nombre: this.state.form.nombre,
                descripcion: this.state.form.descripcion,
                stock: this.state.form.stock,
                tipo: this.state.form.tipo,
                precio_unitario: this.state.form.precio_unitario,
                imagen: this.state.form.imagen
            }).then(async res => {
                let success = res.data;
                console.log(success);
                if (success) {
                    alert("Se agrego correctamente");
                } else {
                    alert("No se agrego correctamente");
                }

            })
    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Nombre del Producto</Form.Label>
                    <Form.Control name="nombre" type="text" placeholder="Introduce tu Producto"
                        defaultValue={"Taco de "} onChange={this.handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNumber">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control name="descripcion" type="text" placeholder="Introduce la decripcion"
                        defaultValue={"Rico taco de"} onChange={this.handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formText">
                    <Form.Label>Costo</Form.Label>
                    <Form.Control name="precio_unitario" type="number" placeholder="Introduce el costo"
                        defaultValue={"$"} onChange={this.handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formText">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control name="stock" type="number" placeholder="Introduce el Stock"
                        defaultValue={"..."} onChange={this.handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formText">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Select name="tipo" aria-label="Default select example" onChange={this.handleChange} required>
                        <option value="Bebidas">Bebidas</option>
                        <option value="Tacos">Tacos</option>
                        <option value="Caldos">Caldos</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formText">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control name="imagen" id='imagen' placeholder="Introduce la imagen"
                        defaultValue={""} onChange={this.handleChange} />
                </Form.Group>

                <Button variant="success" type="submit">
                    Agregar
                </Button>

            </Form>
        )
    }
}
