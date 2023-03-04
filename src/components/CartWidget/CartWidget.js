import { Component, useContext, useEffect, useState } from "react";
import { BsCart } from 'react-icons/bs';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState(0)
    console.log(cart);

    useEffect(() => {
        setTotal(cart.reduce((pastValue, currentValue) => pastValue + currentValue.quantity, 0))
    }, [cart])
    return(
        <Link to={'/cart'}>
            <div>
                <BsCart/>
                {total}
            </div>
        </Link>
    )
}

export default CartWidget;