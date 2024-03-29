import React, { useState } from 'react'
import { Card, ListGroup, Row, Col, Button } from 'react-bootstrap'
import NumericInput from 'react-numeric-input';


export default function DrinkCard(props) {
    //state para la informacion de la bebida
    const [id, setId] = useState(props.id_articulo);
    const [nombre, setNombre] = useState(props.nombre);
    const [precio, setPrecio] = useState(props.precio);
    const [Cantidad, setCantidad] = useState(1);
    const [imagen, setImagen] = useState('/images/aguas.jpeg');
    const [descripcion, setDescripcion] = useState(props.descripcion);
    let nombre_usuario = localStorage.getItem('nombre_usuario');


    //funcion para agregar al carrito
    const agregar = () => {
        if (nombre_usuario) {
            const bebida = {
                id_articulo: id,
                nombre: nombre,
                precio: precio,
                cantidad: Cantidad,
                descripcion: descripcion,
                tipo: 'bebida',
            }
            setCookie(nombre, JSON.stringify(bebida), 1);
            alert('Se agrego al carrito');
            //obtener y mostrar las cookies
            console.log(document.cookie);
        } else {
            alert('Inicia sesion para agregar al carrito');
            window.open('/login', '_self');
        }
    }
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    //funcion para actualizar la cantidad
    const actualizarCantidad = async (value) => {
        await setCantidad(value);
        //console.log(Cantidad);
    }
    return (
        <div>

            <Card style={{ width: '15rem' }} className='square rounded-5 border-secondary mb-4'>
                <img src={props.imagen} />
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>
                        {props.descripción}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush text-end square border border-2">
                    <ListGroup.Item >Precio: <strong>${props.precio}</strong></ListGroup.Item>
                </ListGroup>
                <Card.Body>

                    <Row className='p-1'>
                        <Col>
                            <p>Cantidad:</p>
                            <NumericInput min={0} max={10} defaultValue={1} size={1} onChange={actualizarCantidad} />
                        </Col>
                    </Row>

                    <Row>
                        <Col className='d-grid gap-2 p-1 m-1'>
                            <Button variant="warning" size='lg' name={props.id_articulo} onClick={agregar}>Agregar</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>


        </div>
    )
}

