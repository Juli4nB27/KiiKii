
import React, {createContext, useState } from 'react'


export const CartContext = createContext ([])

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])


    const isInCart = (id) => {
        const found = items.find(item => item.id === id);
        return found
    }

    const addItem = (item, count) => {
        isInCart(item.id)
            ?
            setItems(items.map((prod) => {
               if(prod.id === item.id){
                prod.count += count
               }
                return prod
            }))
            :
            setItems([...items, {id: item.id, name: item.title , price: item.precio, count: count, image: item.image, desc: item.desc}])
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }


    const clearItems = () => {
        setItems([])
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clearItems}}>
            {children}
        </CartContext.Provider>
    )
}

