import './Cart.css'
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext'


const Cart = () => {
    const {cart, clear, removeItem} = useContext(CartContext)
    return (
        <div className='cart__container' > 
        <div className='cart__container__titulo' >
            <h2>Mis Productos</h2>
            <img className='cart__img ' src="/img/cart.png" alt="CART" /> 
        </div>
            {cart.map((product) => (
                <div className='cart__container__product' key={product.name}>
                    <h2>{product.name}</h2>
                    <h5>{product.quantity}</h5>
                    <button onClick={() => removeItem(product.id)} className='itemDetail__cancel__button'>X</button>
                </div>
            ))}
            {cart.length > 0 && <button onClick={clear} className='itemDetail__clearCart__button'>Vaciar carrito</button>} 
        </div>
    );
};
export default Cart;
