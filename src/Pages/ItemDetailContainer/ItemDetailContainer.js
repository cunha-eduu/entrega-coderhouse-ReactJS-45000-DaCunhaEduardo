import './ItemDetailContainer.css';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [detailObject, setDetailObject] = useState({})

const getProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, 'products', id);

    getDoc(querySnapshot)
    .then((response) => {
        setDetailObject({
            id: response.id, ...response.data()
        })
    })
    .catch((error) => console.log(error))
}

    useEffect(() => {
        getProduct()
    }, [])

    return <div className='itemDetailContainer'> 
                <ItemDetail detail={detailObject}/> 
            </div>;
};
export default ItemDetailContainer;
