import React from 'react'
import { Link } from 'react-router-dom'

function Item({ item }) {
    const regularPrice = item.price;
    const discountPrice = regularPrice * 0.8;
    const urlDetail = "../item/" + item.id

    return (
        <div className='cardContainer'>
            <div className='card__img__container'>
                <img src={item.urlPicture} alt="Imagen del producto" className='card__img'></img>
            </div>
            <div className='card__title__container'>
                <span className='card__title'> {item.title} </span>
            </div>
            <div className='card__text__container'>
                <span className='card__regularPrice'> ${regularPrice} </span>
            </div>
            <div className='card__text__container'>
                <span className='card__discountPrice'> ${discountPrice} </span>
            </div>
            <span>Stock: {item.stock}</span>
            <div className='card__btn__container'>
                <Link to={urlDetail} >
                    <button className='card__btn'>
                        Ver detalles
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Item
