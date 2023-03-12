import './Cart.css'
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext'
import { Navigate, useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import swal from 'sweetalert';


const Cart = () => {
    const {cart, clear, removeItem, total, descuento} = useContext(CartContext)
    const navigate = useNavigate()

    const db = getFirestore();
    const createOrder = (event) => {
        event.preventDefault();
        const querySnapshot = collection(db, 'orders');
        
        addDoc(querySnapshot, {
            buyer: {
                email: 'cunha.edu.test@nomail.test.com',
                name: 'Eduardo',
                phone: '+5491188887766'
            },

            products: cart.map((product) => {
                return {
                    name: product.name,
                    price: product.price,
                    id: product.id,
                    quantity: product.quantity
                }
            }),
            total: total
        })
        .then((response) => {
            console.log(response.id)
            swal({
                title: `¡Felicitaciones!`, 
                text: `Su compra ha sido procesada correctamente.\r Referencia: #${response.id}`,
                icon: "success",
                button: "Seguir comprando"
            }).then((response) => {
                if (response) {
                    clear()
                    navigate('/')
                }
            }).catch((error) => console.log(error));

        updateStocks()

        })
        .catch((error) => console.log(error))

    };

    const updateStocks = () =>{
        cart.forEach((product) => {
            const querySnapshot = doc(db, 'products', product.id);

            updateDoc(querySnapshot, {
                stock: product.stock - product.quantity
            })
            .then(() => {
                console.log('El stock ha sido actualizado')
            })
            .catch((error) => console.log(error))
        })
    }

    return (
        <div className='cart__container' > 
            <div className='cart__container__titulo' >
                <h2>Mis Productos</h2>
                <img className='cart__img ' src="/img/cart.png" alt="CART" /> 
            </div>
            

            {cart.map((product) => (
                <div className='cart__container__product' key={product.name}>
                    <img className='cart__container__product__img' src={`/img/${product.image}`} alt="producto" />
                    <h5 className='cart__container__product__name'>{product.name}</h5>
                    <h5 className='cart__container__product__quantity'>{product.quantity}</h5>
                    <button onClick={() => removeItem(product.id)} className='itemDetail__cancel__button'>X</button>
                </div>
            ))}
            {cart.length > 0 && (
            <div>
                <div className='cart__container__product__total'>
                    <span className='cart__product__descuento'>Descuento: - USD {descuento}</span>
                    <span className='cart__product__total'>Total: USD {total - descuento}</span>
                </div>              
                <button onClick={clear} className='itemDetail__clearCart__button'>Vaciar carrito</button>
                <button className='itemDetail__secondary__button2' onClick={createOrder}>Finalizar compra</button>
            </div>)
            } 

            {cart.length === 0 && (
                <div>
                    <h2>Carrito vacio</h2>
                    <button className='itemDetail__secondary__button1' onClick={() => navigate('/')}>Seguir comprando</button>
                </div>
            )}
        </div>
    );
};
export default Cart;
