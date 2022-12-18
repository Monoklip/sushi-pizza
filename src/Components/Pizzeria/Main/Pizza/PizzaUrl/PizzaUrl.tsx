import './pizza-url.scss';

const PizzaUrl = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; }; }) => {

    const {
        name,
        price,
        gramm,
        basket,
        image
    } = props.elem;
    
    return (
        <div className='pizza-url'>
            <div className="pizza-url-shadow">
                <div className="pizza-url-details">
                    <div className="pizza-url-details-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="pizza-url-details-info">
                        <h1>{name}</h1>
                        <p>{basket}</p>
                        <div className="pizza-url-details-info-GrammPrice">
                            <h3>{gramm} грамм</h3>
                            <div className="pizza-url-details-info-GrammPrice-priceButton">
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

export default PizzaUrl;