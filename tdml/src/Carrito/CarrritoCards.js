

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
      listaItems: [],
      listaJSONItems: []

    }
  }
  //obtener los items de las cookies y añadirlos a la lista de items
  async componentDidMount() {
    await this.obtenerCostoTotal();
  }
  //funcion para obtener las cookies de los items
  async obtenerCookies() {
    const items = document.cookie.split(';');
    await this.setState({
      items:
      {
        ...this.state.items,
        listaItems: items
      }
    })
  }


  costoTotal = 0;

  // constante funcion para iterar en la lista de items y obtener el costo total
  obtenerCostoTotal = async () => {
    await this.obtenerCookies();
    console.log(this.state.items.listaItems);
    this.costoTotal=0;
    this.state.items.listaItems.forEach((item) => {
      //recortar el nombre del item
      item = "{" + item.split('{')[1];
      //convertir el string en un objeto JSON
      const itemJSON = JSON.parse(item);
      this.costoTotal += itemJSON.precio * itemJSON.cantidad;
      console.log(this.costoTotal);
      this.editarTotal();
    });
    this.props.actualizarTotal(this.costoTotal);
  }
  //funcion para editar la etiqueta del total
  editarTotal(){
    document.getElementById('total-label').textContent = "Total: "+this.costoTotal;
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
            this.state.items.listaJSONItems.push(itemJSON);
            return (<Col>
              <CarritoCard
                id_articulo={itemJSON.id_articulo}
                nombre={itemJSON.nombre}
                descripcion={itemJSON.descripcion}
                precio={itemJSON.precio}
                cantidad={itemJSON.cantidad}
                tipo={itemJSON.tipo}
                obtenerCostoTotal={this.obtenerCostoTotal} />
            </Col>)
          })}

        </Row>

      </div>
    )
  }
}
