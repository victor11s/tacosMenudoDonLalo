import Axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'
import DrinkCard from './DrinkCard'
import imagenAguas from './images/aguas.jpeg'

let ligaAxios = 'http://localhost:3001/api/';



export default function DrinkCards() {

    const [bebidasLista, setBebidas] = useState([]);

    useEffect(() => {
        async function getDrinks() {
            // Obteniendo bebidas
            await Axios.get(ligaAxios + 'getRefrescos')
                .then((response) => {
                    if (response.data[0] !==undefined) { //Condicion que sirve para validar datos de retorno
                        setBebidas(response.data);
                    } else {
                        console.log("No se recibieron productos para el catálogo");
                    }
                });
        }
        getDrinks();
    }, []);

    return (
        <div >
            <Row >
                <Col className='d-flex justify-content-center my-auto'>
                    <h2>Bebidas</h2>

                </Col>
            </Row>
            <Row className='m-3 BordeNegro' >
                {bebidasLista.map(bebida => {
                    return (
                        <Col key={bebida.id_articulo + '-col'} >
                            <DrinkCard
                                key={bebida.id_articulo + '-DrinkCard'}
                                id_articulo={bebida.id_articulo}
                                nombre={bebida.nombre}
                                descripcion={bebida.descripción}
                                precio={bebida.precio_unitario}
                                imagen={imagenAguas}
                            />
                        </Col>
                    );
                })}

                
            </Row>


        </div>
    )
}
