import './sushi-item.scss';

const SushiItem = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; num: number }; uptadeFoodkList: (arg0: { name: string; price: number; image: string; gramm: number; num: number; sum: number}) => void; }) => {

    const { name,
        price,
        gramm,
        basket,
        image
    } = props.elem;

    const sushiBtn = () => {
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
        <div className='sushi-item'>
            <div className="sushi-item-info">
                <div className="sushi-item-info-image">
                    <img src={`${image}`} alt="" />
                </div>
                <div className="sushi-item-info-details">
                    <h1>{name}</h1>
                    <p>{basket}</p>
                </div>
            </div>
            <div className="sushi-item-buy">
                <div className="sushi-item-buy-price">{price} грн <span> / {gramm} грам</span></div>
                <button className="sushi-item-buy-btn" onClick={sushiBtn}>Замовити</button>
            </div>
        </div>
    )
};

export default SushiItem;