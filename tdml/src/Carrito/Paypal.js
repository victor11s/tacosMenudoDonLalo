import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { AlignMiddle } from 'react-bootstrap-icons';

import PayPalCheckout from 'react-paypal-checkout-button'
import 'react-paypal-checkout-button/dist/index.css'
import { useParams } from 'react-router-dom';

const Paypal = (props) => {
  let { nombre_usuario, amount } = useParams();
  return (
    <Container >
      <Row></Row>
      <Row>
        <Col md={1}></Col>
        <Col md={10} className="justify-content-center">
        <h1>Pagar ${amount}</h1>
          <PayPalCheckout
          clientId='AeIKI84FQ7jy_GvjZNXetrwL-PRIqLuJKFt-aI3jKqXvkKj2fJult-2RVtf03GN_Co4trcItzLvQvsx7'
          id={'paypal-component'}
          amount={amount}
          currency='MXN'
          onSuccess={(data, order) => {
            console.log(data, order);
            //eliminar todas las cookies
            document.cookie.split(";").forEach(function (c) {
              document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
            });
            window.open("/", "_self");
          }}
          onError={(error) => {
            console.log(error)
          }}
        /></Col>
        <Col md={1}></Col>

      </Row>
    </Container>

  )
}

export default Paypal