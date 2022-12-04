import React, { Component, useState, useEffect } from 'react'
import Axios from 'axios';
import EditarModal1 from './modal/EditarModal1.js';

import { Modal, Button } from 'react-bootstrap';

let ligaAxios = 'http://localhost:3001/api/';

export default function Editar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ArticulosLista, setArticulosLista] = useState([]);

    

    const deleteArticle =  async (event) => {

        /*Longitud de ArticuloLista*/
        let longitudOriginal = ArticulosLista.length;

        console.log("soy el id",event.target.id);
        event.preventDefault();
        await Axios.post(ligaAxios + "delete",{"id" :event.target.id});
        document.getElementById(event.target.id+ + '-tr').remove();
        
        

    }


    useEffect(() => {
        async function getTabla() {
            await Axios.get(ligaAxios + "getTablaEditar").then((response) => {
                console.log(response.data[0])
                if (response.data[0] != undefined) {
                    setArticulosLista(response.data);
                }
                else {
                    console.log("No hay datos")
                }
            });
        }
        getTabla();
    }, []);


    return (
        <div class="table-responsive FondoBlanco">
            <table class="table table-striped table-hover table-bordered border-warning">
                <thead>
                    <tr>
                        <th scope="col">Nombre del Producto</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Costo</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Opciones</th>

                    </tr>
                </thead>
                <tbody>
                    {ArticulosLista.map(elemento => {
                        return (
                            <tr key={elemento.id_articulo + '-tr'} id={elemento.id_articulo + '-tr'}>
                                <th scope="row">{elemento.nombre}</th>
                                <td>{elemento.descripción}</td>
                                <td>{elemento.precio_unitario}</td>
                                <td>{elemento.stock}</td>
                                <td>{elemento.tipo}</td>
                                <td>{elemento.imagen}</td>
                                <td><button type="button" className="btn btn-primary m-1" onClick={handleShow}>Editar</button>
                                    <button type="button" class="btn btn-danger" id={elemento.id_articulo} onClick={deleteArticle}>Eliminar</button></td>
                            </tr>
                        );
                        })}



                </tbody>

            </table>

            <Modal show={show} onClick={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditarModal1 />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>

    )

}
