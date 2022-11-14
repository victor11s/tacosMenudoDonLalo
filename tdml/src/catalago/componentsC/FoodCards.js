import Axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'
import FoodCard from './FoodCard'

let ligaAxios = 'http://localhost:3001/api/';

export default function FoodCards() {

    const [tacosLista, setTacos] = useState([]);

    useEffect(() => {
        // Obteniendo tacos y caldos
        async function getTacos() {
            await Axios.get(ligaAxios + 'getTacos')
                .then((response) => {
                    console.log(response.data[0])
                    if (response.data[0] !== undefined) { //Condicion que sirve para validar datos de retorno
                        setTacos(response.data);
                    } else {
                        console.log("No se recibieron productos para el catálogo");
                    }
                });
        }
        getTacos();
    }, []);

    return (
        <div>
            <Row>
                <Col className='d-flex justify-content-center my-auto'>
                    <h2>Tacos y Caldos</h2>
                </Col>
            </Row>
            <Row className='m-3' fluid="true">
                {tacosLista.map(platillo => {
                    return (
                        <Col key={platillo.id_articulo + '-col'} >
                            <FoodCard
                                key={platillo.id_articulo + '-foodCard'}
                                imagen = {platillo.imagen}
                                nombre = {platillo.nombre}
                                precio = {platillo.precio_unitario}
                            />
                        </Col>
                    );
                })}
                {/* <Col>
                    <FoodCard />
                </Col> */}
            </Row>


        </div>
    )
}
