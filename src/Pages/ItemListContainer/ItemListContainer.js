import './ItemListContainer.css'
import {products} from '../../data/products'
import {useEffect, useState } from 'react';
import  ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting, descuento}) => {
    const [productList, setProductList] = useState([])
    const [inputValue, setInputValue] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId)
    const getProducts = new Promise((resolve, reject) => {
        if(categoryId) {
            const filteredProducts = products.filter((item) => item.category === categoryId)
            setTimeout(() => {
                resolve(filteredProducts)
            }, 1000)

        } else {
            setTimeout(() => {
                resolve(products)
            }, 1000)
        }
        
    })

    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response)
        })
            .catch((error) => {
                console.log(error)
            });
    }, [categoryId]);

    return(
        <div className='itemListContainer'>
            <h2 className='itemListContainer__geeting'>{greeting}</h2>
            <h3 className='itemListContainer__descuento' >{descuento}</h3>
            <div>
                <ItemList productList={productList} />
            </div>
            
        </div>
    )
};
export default ItemListContainer;
