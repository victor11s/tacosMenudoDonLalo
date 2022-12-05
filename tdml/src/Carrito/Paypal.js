import React from 'react'
 
import PayPalCheckout from 'react-paypal-checkout-button'
import 'react-paypal-checkout-button/dist/index.css'
 
const Paypal = (props) => {
  return (
    <PayPalCheckout
      clientId='AeIKI84FQ7jy_GvjZNXetrwL-PRIqLuJKFt-aI3jKqXvkKj2fJult-2RVtf03GN_Co4trcItzLvQvsx7'
      id={'paypal-component'}
      amount={props.total}
      currency='MXN'
      onSuccess={(data, order) => {
        console.log(data, order);
        //eliminar todas las cookies
        document.cookie.split(";").forEach(function(c) {
          document.cookie = c
              .replace(/^ +/, "")
              .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        window.open("/","_self");
      }}
      onError={(error) => {
        console.log(error)
      }}
    />
  )
}
 
export default Paypal