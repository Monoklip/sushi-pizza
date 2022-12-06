import './bar-item.scss';

const BarItem = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; num: number }; uptadeFoodkList: (arg0: { name: string; price: number; image: string; gramm: number; num: number; sum: number}) => void; }) => {

    const { name,
        price,
        gramm,
        basket,
        image
    } = props.elem;

    const barBtn = () => {
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
        <div className='bar-item'>
            <div className="bar-item-info">
                <div className="bar-item-info-image">
                    <img src={`${image}`} alt="" />
                </div>
                <div className="bar-item-info-details">
                    <h1>{name}</h1>
                    <p>{basket}</p>
                </div>
            </div>
            <div className="bar-item-buy">
                <div className="bar-item-buy-price">{price} грн <span> / {gramm} грам</span></div>
                <button className="bar-item-buy-btn" onClick={barBtn}>Замовити</button>
            </div>
        </div>
    )
};

export default BarItem;