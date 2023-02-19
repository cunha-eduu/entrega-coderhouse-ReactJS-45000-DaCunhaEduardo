import Item from "../Item/Item";
import { Link } from "react-router-dom";
import './ItemList.css'

const ItemList = ({productList}) => {
 /*  console.log(productList) */

return (
    <div className="itemList">
        
    {productList.map((product) => (
        <div key={product.id}>
        <Link to={`/item/${product.id}`}>
                <Item product={product}/>
        </Link>
        </div> 
    ))}
    </div>
);
};
export default ItemList;
