import React, { useState } from 'react'

import { Card, ListGroup, Row, Col, Button, Form } from 'react-bootstrap'
import imagenAguas from './images/aguas.jpeg'
import tacos from './images/tacos-2.jpg'


import NumericInput from 'react-numeric-input';

export default function CarritoCard(props) {
    let imagenFinal;
    props.tipo == "bebida" ? imagenFinal = imagenAguas : imagenFinal = tacos;

    //state para la cantidad
    const [Cantidad, setCantidad] = useState(props.cantidad);

    //funcion para actualizar el state de la cantidad
    const actualizarCantidad = async (value) => {
        await setCantidad(value);
        const comida = {
            id_articulo: props.id_articulo,
            nombre: props.nombre,
            precio: props.precio,
            cantidad: value,
            descripcion: props.descripcion,
            tipo: props.tipo,
        }
         console.log(comida)
         await setCookie(props.nombre, JSON.stringify(comida), 1);
         await props.actualizarJSONListaItems(props.id_articulo, value);
         await props.obtenerCostoTotal();
    }

    //funcion para borrar un item de las cookies
    const borrar = async () => {
        const comida = {
            id_articulo: props.id_articulo,
            nombre: props.nombre,
            precio: props.precio,
            cantidad: Cantidad,
            descripcion: props.descripcion,
            tipo: props.tipo,
        }
        console.log(comida);
        await setCookie(props.nombre, JSON.stringify(comida), 0);
        //eliminar la card de elemento borrado
        await props.actualizarJSONListaItems(props.id_articulo,0);
        await props.obtenerCostoTotal();
        document.getElementById(props.id_articulo+"-div").remove();

    }


    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }


    //constante para guardar un select
    const selectTortilla = <Row className='p-1'>
        <Col>
            <Form.Select name='tortilla' aria-label="Default select example">
                <option>Selecciona tu tortilla</option>
                <option value="Maiz">Maiz</option>
                <option value="Harina">Harina</option>
            </Form.Select>
        </Col>
    </Row>
    return (
        <div id={props.id_articulo+"-div"}>
            <Card style={{ width: '15rem' }} className='square rounded-5 border-secondary mb-4'>
                <Card.Img src={imagenFinal} />
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>
                        {props.descripcion}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush text-end square border border-2">
                    <ListGroup.Item >Precio: <strong>${props.precio}</strong></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    {props.tipo == "bebida" ? null : selectTortilla}

                    <Row className='p-1'>
                        <Col>
                            <p>Cantidad:</p>
                            <NumericInput min={0} max={100} defaultValue={props.cantidad} size={1} onChange={actualizarCantidad} />
                        </Col>
                    </Row>

                    <Row>
                        <Col className='d-grid gap-2 p-1 m-1'>
                            <Button variant="danger" size='lg' onClick={borrar}>Eliminar</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>


        </div>
    )
}
