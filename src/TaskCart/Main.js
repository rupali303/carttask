import React from 'react'
import { CartProvider } from 'react-use-cart'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

function Main() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Cart />
      </CartProvider>


    </>
  )
}

export default Main