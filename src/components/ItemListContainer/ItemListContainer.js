import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='itemListContainer'>
            <h2>{greeting}</h2>
            <ul>
                <li>
                    Ambos
                </li>
                <li>
                    Estetoscopios
                </li>
                <li>
                    Guardapolvos
                </li>
            </ul>
            <p>Nuestros productos más vendidos con un 30%OFF</p>
        </div>
    )
}

export default ItemListContainer;