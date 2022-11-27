import React, { useContext, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { contexto } from './CustomProvider';
import { errorNotify } from "../utils/notifications"


function Form() {

    const context = useContext(contexto)
    const getCarrito = context.getCarrito

    const setOrder = context.setOrder
    const [validEmail, setValidEmail] = useState(false)

    const refName = useRef()
    const refEmail = useRef()
    const refConfEmail = useRef()
    const refAddress = useRef()

    const emailValidation = () => {
        const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
        const email1 = refEmail.current.value;
        const email2 = refConfEmail.current.value
        if ((email1 === email2) && emailRegex.test(email1)) {
            setValidEmail(true)
        } else
            setValidEmail(false)
    }

    const confirmarPedido = () => {
        const carrito = getCarrito()
        const date = serverTimestamp();

        const orden = {
            date: date,
            carrito: carrito
        }
        const ordersCollection = collection(db, "ordenes")
        const saveOrder = addDoc(ordersCollection, orden)

        saveOrder
            .then((res) => {
                orden.id = res.id
                setOrder(orden)
            })
            .catch((err) => {
                errorNotify(err)
            })


    }



    return (
        <div className='form--container'>
            <form className='formItem'>


                <div >
                    <label>Nombre y Apellido</label>
                    <input required ref={refName} type="text" placeholder="Juan Perez" />
                </div>
                <div >
                    <label>Direccion de envío</label>
                    <input ref={refAddress} type="address" placeholder="Av Millan 1234" required />
                </div>
                <div>
                    <label>Email</label>
                    <input ref={refEmail} onChange={emailValidation} type="email" placeholder="fulano@email.com" required />
                </div>
                <div>
                    <label>Confirme email</label>
                    <input ref={refConfEmail} onChange={emailValidation} type="email" placeholder="fulano@email.com" required />
                </div>
                <hr></hr>
                {validEmail ? <NavLink to="/checkout"><button onClick={confirmarPedido} className="card__btn">Confirmar pedido</button></NavLink> : <p>Email no valido o no coincide</p>}

            </form>
        </div>
    )
}

export default Form
