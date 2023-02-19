import './ItemCount.css'

const ItemCount = ({count, setCount}) => {
    const onAdd = () => {
        setCount(count + 1)
    }
    const onSubtract  = () => {
        if (count === 0) {
            return;
        }
        setCount(count - 1)
    }
    return (
        <div className='itemCount__counter'>
            <div className='itemCount__controllers'>
                <button className='itemCount__controllers__button' onClick={onSubtract}>-</button>
                <div>
                    <span>{count}</span>
                </div>
                <button button className='itemCount__controllers__button' onClick={onAdd}>+</button>
            </div>
        </div>
    );
};
export default ItemCount;
