import { React, useContext } from 'react'
import { contexto } from '../components/CustomProvider'
import ItemCartList from './ItemCartList';

function ItemCartContainer() {
  const context = useContext(contexto)
  const products = context.products
  const handleCheckout = context.handleCheckout

  return (
    <>
      <ItemCartList products={products} handleCheckout={handleCheckout} />
    </>
  );

}

export default ItemCartContainer
