

import Axios from 'axios';
import React, { useState, Component } from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap'

import CarritoCard from './CarritoCard';

import tacos from './images/tacos-2.jpg'
import menudo from './images/menudo.jpg'

export default class CarrritoCards extends Component {

  ligaAxios = 'http://localhost:3001/api/';


  state = {
    items: {
      listaItems: []

    }
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

  //obtener los items de las cookies y añadirlos a la lista de items
  async componentDidMount() {
    const items = document.cookie.split(';');
    await this.setState({
      items:
      {
        ...this.state.items,
        listaItems: items
      }
    })
  }
  render() {
    return (
      <div>
        <Row className='m-3 BordeNegro'>

          {this.state.items.listaItems.map((item) => {
            //recortar el nombre del item
            item = "{" + item.split('{')[1];
            //convertir el string en un objeto JSON
            const itemJSON = JSON.parse(item);
            console.log(itemJSON);
            return (<Col>
              <CarritoCard
                nombre={itemJSON.nombre}
                precio={itemJSON.precio}
                cantidad={itemJSON.cantidad}
                tipo={itemJSON.tipo}
                imagen={itemJSON.imagen} />
            </Col>)
          })}

        </Row>

      </div>
    )
  }
}
