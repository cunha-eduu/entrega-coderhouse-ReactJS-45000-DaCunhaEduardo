import './ItemDetail.css'

const ItemDetail = ({detail}) => {
    
    return 
    (<div className="item__detail">
        <img className='item__detail__img' alt={detail.name} src={detail.image}/>
        <h2>{detail.name}</h2>
    </div>);
    };
    export default ItemDetail;
    