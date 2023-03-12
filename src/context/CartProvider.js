import {CartContext} from './CartContext';
import { useState, useEffect } from 'react';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [descuento, setDescuento] = useState(0)

    useEffect(() => {
        setTotal(cart.reduce((accumulado, valorActual) => accumulado + valorActual.price * valorActual.quantity, 0))
    }, [cart])

    useEffect(() => {
        setDescuento(total - (total - (total*10/100)))
    }, [total])


    const addItem = (item, quantity) => {
        console.log(isInCart(item.id));

        if (isInCart(item.id)) {
            const newCart = cart.map((product) => {
                if(product.id === item.id) {
                    product.quantity = product.quantity + quantity
                    return product
                } else {
                    return product
                }
            })
            setCart(newCart)
        } else {
            const product = {
                id: item.id,
                name: item.name,
                description: item.description,
                quantity: quantity,
                price: item.price,
                stock: item.stock,
                category: item.category,
                image: item.image,
            }
            setCart([...cart, product])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (productId) => {
        setCart(cart.filter((product) => product.id !== productId))
    }

    const isInCart = (productId) => {
        if (cart.find((product) => product.id === productId)) {
            return true
        } else {
            return false
        }
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem, total, descuento}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
