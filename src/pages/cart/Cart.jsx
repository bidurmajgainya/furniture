import React from 'react'
import Footer from '../../components/footer/Footer'
import CartGrid from '../../components/cart/CartGrid'

const Cart = () => {
  return (
    <div className='container mx-auto  px-5 md:px-10'>
      <CartGrid/>
      <Footer/>
    </div>
  )
}

export default Cart