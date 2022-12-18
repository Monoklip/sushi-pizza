import './bar-url.scss';

const BarUrl = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; }; }) => {

    const {
        name,
        price,
        gramm,
        basket,
        image
    } = props.elem;
    
    return (
        <div className='bar-url'>
            <div className="bar-url-shadow">
                <div className="bar-url-details">
                    <div className="bar-url-details-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="bar-url-details-info">
                        <h1>{name}</h1>
                        <p>{basket}</p>
                        <div className="bar-url-details-info-GrammPrice">
                            <h3>{gramm} грамм</h3>
                            <div className="bar-url-details-info-GrammPrice-priceButton">
                                <h2>{price} грн.</h2>
                                <button>Замовити</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BarUrl;