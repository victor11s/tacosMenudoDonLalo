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
      
      <Row className='d-flex justify-content-center m-5'>
        <Col sm={1}></Col>
        <Col sm={10} className="text-center">
        <h1 className='text-center'>Pagar ${amount}</h1>
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
        <Col sm={1}></Col>

      </Row>
    </Container>

  )
}

export default Paypal