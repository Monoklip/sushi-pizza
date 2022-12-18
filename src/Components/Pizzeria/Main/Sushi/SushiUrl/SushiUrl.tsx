import './sushi-url.scss';

const SushiUrl = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; }; }) => {

    const {
        name,
        price,
        gramm,
        basket,
        image
    } = props.elem;
    
    return (
        <div className='sushi-url'>
            <div className="sushi-url-shadow">
                <div className="sushi-url-details">
                    <div className="sushi-url-details-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="sushi-url-details-info">
                        <h1>{name}</h1>
                        <p>{basket}</p>
                        <div className="sushi-url-details-info-GrammPrice">
                            <h3>{gramm} грамм</h3>
                            <div className="sushi-url-details-info-GrammPrice-priceButton">
                                <h2>{price} грн.</h2>
                                <button>Замовити</button>
                            </div>
                        </div>
                    </div>
                    <div className="sushi-url-details-close">
                        <img src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/cross_delete_remove_close-2-512.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SushiUrl;