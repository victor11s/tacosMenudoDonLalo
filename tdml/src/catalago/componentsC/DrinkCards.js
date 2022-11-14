import Axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'
import DrinkCard from './DrinkCard'

let ligaAxios = 'http://localhost:3001/api/';

export default function DrinkCards() {

    const [bebidasLista, setBebidas] = useState([]);

    useEffect(() => {
        async function getDrinks() {
            // Obteniendo bebidas
            await Axios.get(ligaAxios + 'getRefrescos')
                .then((response) => {
                    if (response.data[0]) { //Condicion que sirve para validar datos de retorno
                        setBebidas(response.data !== undefined);
                    } else {
                        console.log("No se recibieron productos para el catálogo");
                    }
                });
        }
        getDrinks();
    }, []);

    return (
        <div>
            <Row>
                <Col className='d-flex justify-content-center my-auto'>
                    <h2>Bebidas</h2>

                </Col>
            </Row>
            <Row className='m-3'>
                {bebidasLista.map(bebida => {
                    return (
                        <Col key={bebida.id_articulo + '-col'} >
                            <DrinkCard key={bebida.id_articulo + '-foodCard'} />
                        </Col>
                    );
                })}

                <Col>
                    <DrinkCard />
                </Col>
            </Row>


        </div>
    )
}
