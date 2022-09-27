
import React, {createContext, useState } from 'react'


export const CartContext = createContext ([])

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState([])
    const [totalS, setTotalS] = useState(0)

    const isInCart = (id) => {
        const found = items.find(item => item.id === id);
        return found
    }

    const addItem = (item, count) => {

        setTotal([...total, item.precio *count])
        const totalScores = total.reduce(
            (previusScore, currrentScore,) => previusScore+currrentScore, item.precio *count);
            setTotalS(totalScores)
        isInCart(item.id)
            ?
            setItems(items.map((prod) => {
               if(prod.id === item.id){
                prod.count += count
               }
                return prod
            }))
            :
            setItems([...items, {id: item.id, name: item.title , price: item.precio, count: count, image: item.image, desc: item.desc, totalS:item.totalS }])
    }


    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
        
    }


    const clearItems = () => {
        setItems([])
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clearItems, totalS}}>
            {children}
        </CartContext.Provider>
    )
}

