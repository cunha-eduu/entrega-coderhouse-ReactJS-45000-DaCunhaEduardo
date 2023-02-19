import './ItemDetail.css'
import { useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({detail}) => {
    const navigate = useNavigate()
    const [count, setCount] = useState(0)
    const agregarAlCarrito = (event) => {
        event.preventDefault()
        console.log({...detail, quantity: count})
    }
    
    return(
    <div className="item__detail">
        <h2 className='item__detail__name' >{detail.name}</h2>
        <img className='item__detail__img' alt={detail.name} src={detail.image}/>
        
        <h3 className='item__detail__description'>{detail.description}</h3>
        <h3 className='item__detail__price'>{detail.price}</h3>

        <ItemCount count={count} setCount={setCount}/>
        
        <button className="itemDetail__button"  onClick={agregarAlCarrito}>Agregar al carrito</button>
        <div className="itemDetail__secondary__button">
            <button className="itemDetail__secondary__button1"  onClick={() => navigate('/')}>Seguir comprando</button>
            <button className="itemDetail__secondary__button2"  onClick={() => navigate('/cart')}>Finalizar Compra</button>
        </div>
        
    </div>
    );
    };
    export default ItemDetail;
    