import { React, useState } from 'react';
import { noStockNotify } from "../utils/notifications"


function ItemCount({ handleOnAdd, stock, showAddBtn }) {

    const [count, setCount] = useState(1);

    const addItem = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
           noStockNotify();
        }
    }

    const subItem = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const addToCart = () => {
        if (count != 0) {

            handleOnAdd(count)
            setCount(0)
        }
    }


    return (
        <>
            <div className='counter__container'>
                <button className='item__count' onClick={subItem}>-</button>
                <span className='item__count__output'>{count}</span>
                <button className='item__count' onClick={addItem}>+</button>
            </div>
            <div className="details__btn__container">
                {showAddBtn == true ? <button className='details__btn' onClick={addToCart}>Agragar al carrito</button> : null}
            </div>
            {stock > 0 ? <p>Stock disponible: {stock} </p> : <h3>NO HAY STOCK</h3>}
        </>
    )
}

export default ItemCount
