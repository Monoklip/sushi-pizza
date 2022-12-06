import './salate-item.scss';

const SalateItem = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; num: number }; uptadeFoodkList: (arg0: { name: string; price: number; image: string; gramm: number; num: number; sum: number}) => void; }) => {

    const { name,
        price,
        gramm,
        basket,
        image
    } = props.elem;

    const salateBtn = () => {
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
        <div className='salate-item'>
            <div className="salate-item-info">
                <div className="salate-item-info-image">
                    <img src={`${image}`} alt="" />
                </div>
                <div className="salate-item-info-details">
                    <h1>{name}</h1>
                    <p>{basket}</p>
                </div>
            </div>
            <div className="salate-item-buy">
                <div className="salate-item-buy-price">{price} грн <span> / {gramm} грам</span></div>
                <button className="salate-item-buy-btn" onClick={salateBtn}>Замовити</button>
            </div>
        </div>
    )
};

export default SalateItem;