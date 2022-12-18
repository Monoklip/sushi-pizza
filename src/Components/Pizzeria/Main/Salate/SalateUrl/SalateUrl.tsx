import './salate-url.scss';

const SalateUrl = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; }; }) => {

    const {
        name,
        price,
        gramm,
        basket,
        image
    } = props.elem;
    
    return (
        <div className='salate-url'>
            <div className="salate-url-shadow">
                <div className="salate-url-details">
                    <div className="salate-url-details-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="salate-url-details-info">
                        <h1>{name}</h1>
                        <p>{basket}</p>
                        <div className="salate-url-details-info-GrammPrice">
                            <h3>{gramm} грамм</h3>
                            <div className="salate-url-details-info-GrammPrice-priceButton">
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

export default SalateUrl;