import './pizza-item.scss';

const PizzaItem = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; num: number }; uptadeFoodkList: (arg0: { name: string; price: number; image: string; gramm: number; num: number; sum: number}) => void; }) => {

    const { name,
        price,
        gramm,
        basket,
        image
    } = props.elem;

    const pizzaBtn = () => {
        props.uptadeFoodkList({
            name: name,
            price: price,
            image: image,
            gramm: gramm,
            num: 1,
            sum: price
        });
    };

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
                <button className="pizza-item-buy-btn" onClick={pizzaBtn}>Замовити</button>
            </div>
        </div>
    )
};

export default PizzaItem;