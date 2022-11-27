import { React, useContext } from 'react'
import ItemCount from "../components/ItemCount"
import { contexto } from '../components/CustomProvider'

function ItemCart({product}) {

    const price = product.price * 0.8 * product.qty
    const context = useContext(contexto)

    const handleOnAdd= (cantidad) => {
        context.handleCart(product, cantidad)

    }

    const handleDelete = () => {
            context.deleteItem(product)
    }
    
  return (
    <div className='cartItem--container'>
        <div className='cartItem--imgContainer'>
            <img src={product.urlPicture} className="cartItem--img"></img>
        </div>
        <div className='cartDescription--container'>
            <h2 className='cartTitle'>{product.title}</h2>
            <p>{product.description}</p>
        </div>
        
        <div className='cartPrice--container'>
            <ItemCount
            handleOnAdd={handleOnAdd}
            stock={product.stock}
            showAddBtn={true}/>
        </div>
        <div className='cartQty--container'>
            <h2 className='cartQty'>{product.qty} un</h2>
            <h2 className='cartPrice'>$ {price}</h2>
        </div>
        <div>
        <button onClick={handleDelete}><span className="material-symbols-outlined">
                delete
            </span></button>
        </div>
    </div>
  )
}

export default ItemCart
