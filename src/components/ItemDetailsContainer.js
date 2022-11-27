import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetails from './ItemDetails'
import { db } from "../firebase"
import { collection, getDoc, doc } from "firebase/firestore"
import { errorNotify } from "../utils/notifications"

function ItemDetailsContainer() {

    const [item, setItems] = useState([])

    const { elementId } = useParams()

    useEffect(() => {

        const productosCollections = collection(db, "productos");
        const referencia = doc(productosCollections, elementId)
        const consulta = getDoc(referencia)

        consulta
            .then(res => {
                const item = res.data()
                item.id = res.id
                setItems(item)
            })
            .catch(err => {
                errorNotify(err)
            })

    }, [elementId])

    return (
        <>
            {item.length == 0 ? <p>Cargando...</p> : <ItemDetails key={item.id} item={item} />}
        </>

    )
}
export default ItemDetailsContainer
