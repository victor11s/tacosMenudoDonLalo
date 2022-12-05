import React, { useState } from 'react'
import { Card, ListGroup, Row, Col, Button, Form } from 'react-bootstrap'
import tacos from './images/tacos.jpg'
import NumericInput from 'react-numeric-input';

export default function FoodCard(props) {

    //state para la informacion de la bebida
    const [id, setId] = useState(props.id_articulo);
    const [nombre, setNombre] = useState(props.nombre);
    const [precio, setPrecio] = useState(props.precio);
    const [Cantidad, setCantidad] = useState(1);
    const [imagen, setImagen] = useState('./images/tacos-2.jpg');
    const [descripcion, setDescripcion] = useState(props.descripcion);

    //funcion para agregar al carrito
    const agregar = () => {
        const comida = {
            id_articulo: id,
            nombre: nombre,
            precio: precio,
            cantidad: Cantidad,
            descripcion: descripcion,
            tipo: 'comida',
        }
        setCookie(nombre, JSON.stringify(comida), 1);
        //alerta que confirma que se agrego al carrito
        alert('Se agrego al carrito');
        //obtener y mostrar las cookies
        console.log(document.cookie);
    }


    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

      //funcion para actualizar la cantidad
    const actualizarCantidad = async (value) => {
        await setCantidad(value);
    }

    const tipo = props.tipo;

    const boton = () => {
        return (
            <Row className='p-1'>
                        <Col>
                            <Form.Select name='tortilla' aria-label="Default select example" id='select' onLoad={disableSelect} >
                                <option>Selecciona tu tortilla</option>
                                <option value="Maiz">Maiz</option>
                                <option value="Harina">Harina</option>
                            </Form.Select>
                        </Col>
                    </Row>
        )
    }

    /* Funcion para deshabilitar el select*/
    function disableSelect() {
        if (props.tipo === 'Caldos') {
            document.getElementById("select").disabled = true;
        }
        
    }



    return (
        <div>
            <Card style={{ width: '16rem'}} className='square rounded-5 border-secondary mb-4'>
                <Card.Img src={props.imagen} />
                <Card.Body>
                    <Card.Title className='LNC'>{props.nombre}</Card.Title>
                    <Card.Text className='ST'>
                        {props.descripción}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush text-end square border border-2">
                    <ListGroup.Item >Precio: <strong>${props.precio}</strong></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    {tipo==='Tacos' ? boton() : null}

                    <Row className='p-1'>
                        <Col>
                            <p>Cantidad:</p>
                            <NumericInput min={0} max={10} defaultValue={1} size={1} onChange={actualizarCantidad}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='d-grid gap-2 p-1 m-1'>
                            <Button variant="warning" size='lg' onClick={agregar}>Agregar</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>


        </div>
    )
}
