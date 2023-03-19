import './ItemDetail.css'
import { useContext, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({detail}) => {
    const navigate = useNavigate()
    const {addItem} = useContext(CartContext)
    const [count, setCount] = useState(detail.stock === 0 ? 0 : 1)
    
    return(
    <div className="item__detail">
        <h2 className='item__detail__name' >{detail.name}</h2>
        <img className='item__detail__img' alt={detail.name} src={`/img/${detail.image}`}/>
        
        <h3 className='item__detail__description'>{detail.description}</h3>
        <h3 className='item__detail__price'>USD {detail.price}</h3>

        <ItemCount count={count} setCount={setCount}/>
        
        <button className="itemDetail__button"  onClick={() => addItem(detail, count)}>Agregar al carrito</button>
        <div className="itemDetail__secondary__button">
            <button className="itemDetail__secondary__button__seguir"  onClick={() => navigate('/')}>Seguir comprando</button>
            <button className="itemDetail__secondary__button__finalizar" onClick={() => navigate('/cart')}>Finalizar Compra</button>
        </div>
        
    </div>
    );
    };
    export default ItemDetail;
    