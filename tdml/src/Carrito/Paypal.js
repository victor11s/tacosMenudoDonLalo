import React from 'react'
 
import PayPalCheckout from 'react-paypal-checkout-button'
import 'react-paypal-checkout-button/dist/index.css'
 
const Paypal = () => {
  return (
    <PayPalCheckout
      clientId='AeIKI84FQ7jy_GvjZNXetrwL-PRIqLuJKFt-aI3jKqXvkKj2fJult-2RVtf03GN_Co4trcItzLvQvsx7'
      amount={100}
      currency='MXN'
      onSuccess={(data, order) => {
        console.log(data, order)
      }}
      onError={(error) => {
        console.log(error)
      }}
    />
  )
}
 
export default Paypal