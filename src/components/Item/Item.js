import './Item.css'

const Item = ({product}) => {
  return (
    <div className='item'>
      <h2 className='item__name'>{product.name}</h2>
      <img className='item__img' alt={product.name} src={product.image}/>
      <h3 className='item__price'>{product.price}</h3>
      <button className='item__button'>Detalles del producto</button>
    </div>
  );
};
export default Item;
