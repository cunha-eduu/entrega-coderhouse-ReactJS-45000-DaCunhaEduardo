import './Item.css'

const Item = ({product}) => {
  return (
    <div className='item'>
      <h2>{product.name}</h2>
      <img className='item__img' alt={product.name} src={product.image}/>
      <h3>{product.price}</h3>
    </div>
  );
};
export default Item;
