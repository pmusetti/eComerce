import { React, useContext } from 'react'
import { contexto } from '../components/CustomProvider';



function Cart() {

  const context = useContext(contexto)
  const order = context.order
 
  return (
    <div className='checkout--conatiner'>
      <h2>Estamos preparando tu pedido!</h2>
      <h4> Podes rastrearlo con el siguiente codigo: <span>{order.id}</span></h4>
    </div>
  )
}

export default Cart
