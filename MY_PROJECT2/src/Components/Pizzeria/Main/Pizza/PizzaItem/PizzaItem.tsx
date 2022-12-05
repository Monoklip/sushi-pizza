import './pizza-item.scss';

const PizzaItem = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string;}; }) => {

    const { name,
        price,
        gramm,
        basket,
        image
    } = props.elem;

    return(
        <div className='pizza-item'>
            <div className="pizza-item-info">
                <div className="pizza-item-info-image">
                    <img src={`${image}`} alt="" />
                </div>
                <div className="pizza-item-info-details">
                    <h1>{name}</h1>
                    <p>{basket}</p>
                </div>
            </div>
            <div className="pizza-item-buy">
                <div className="pizza-item-buy-price">{price} грн <span> / {gramm} грам</span></div>
                <button className="pizza-item-buy-btn">Замовити</button>
            </div>
        </div>
    )
};

export default PizzaItem;