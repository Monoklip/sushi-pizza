import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sushi-url.scss';

const SushiUrl = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; }; uptadeFoodkList: (arg0: { name: string; price: number; image: string; gramm: number; num: number; sum: number; }) => void; }) => {

    const {
        name,
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

    const [btnNone, setBtnNone] = useState(true);
    const [btnYes, setBtnYes] = useState(false);

    const food = JSON.parse(localStorage.getItem('Food') as string) || [];

    const getFood = async() => {
        food.map((elem: { name: string; }) => {
            if(elem.name === name){
                setBtnNone(false);
                setBtnYes(true);
            }            
        })
    };

    useEffect(()=>{
        getFood();
    },[food]);
    
    return (
        <div className='sushi-url'>
            <div className="sushi-url-shadow">
                <div className="sushi-url-details">
                    <div className="sushi-url-details-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="sushi-url-details-info">
                        <h1>{name}</h1>
                        <div className="sushi-url-details-info-basket">
                            <p>{basket}</p>
                        </div>
                        <div className="sushi-url-details-info-GrammPrice">
                            <h3>{gramm} грамм</h3>
                            <div className="sushi-url-details-info-GrammPrice-priceButton">
                                <h2>{price} грн.</h2>
                                {btnNone &&
                                    <button className='sushi-url-details-info-GrammPrice-priceButton-green' onClick={sushiBtn}>Замовити</button>
                                }
                                {btnYes &&
                                    <button className='sushi-url-details-info-GrammPrice-priceButton-orange' onClick={sushiBtn}>Заказ прийнято</button>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="sushi-url-details-close">
                        <Link to={'/sushi'}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Icon_close.svg/2048px-Icon_close.svg.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SushiUrl;