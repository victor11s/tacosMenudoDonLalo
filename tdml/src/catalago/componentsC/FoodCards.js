import Axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'
import FoodCard from './FoodCard'

import tacos from './images/tacos-2.jpg'
import menudo from './images/menudo.jpg'

let ligaAxios = 'http://localhost:3001/api/';

export default function FoodCards() {

    const [tacosLista, setTacos] = useState([]);
    const [caldosLista, setCaldos] = useState([]);

    useEffect(() => {
        // Obteniendo tacos 
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

    useEffect(() => {
        // Obteniendo caldos
        async function getCaldos() {
            await Axios.get(ligaAxios + 'getCaldos')
                .then((response) => {
                    console.log(response.data[0])
                    if (response.data[0] !== undefined) { //Condicion que sirve para validar datos de retorno       
                        setCaldos(response.data);
                    } else {
                        console.log("No se recibieron productos para el catálogo");
                    }
                });
        }
        getCaldos();
    }, []);


    return (
        <div>
            <Row>
                <Col className='d-flex justify-content-center my-auto'>
                    <h2>Tacos y Caldos</h2>
                </Col>
            </Row>
            <Row className='m-3 BordeNegro' fluid="true">
                {tacosLista.map(platillo => {
                    return (
                        <Col key={platillo.id_articulo + '-col'} >
                            <FoodCard
                                key={platillo.id_articulo + '-foodCard'}
                                imagen = {tacos}
                                nombre = {platillo.nombre}
                                precio = {platillo.precio_unitario}
                                descripción = {platillo.descripción}
                                tipo = {platillo.tipo}
                            />
                        </Col>
                    );
                })}
                 {caldosLista.map(caldo => {
                    return (
                        <Col key={caldo.id_articulo + '-col'} >
                            <FoodCard
                                key={caldo.id_articulo + '-foodCard'}
                                imagen = {menudo}
                                nombre = {caldo.nombre}
                                precio = {caldo.precio_unitario}
                                descripción = {caldo.descripción}
                                tipo = {caldo.tipo}
                            />
                        </Col>
                    );
                })}

                
            </Row>
            


        </div>
    )
}
