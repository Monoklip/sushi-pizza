import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './bar-url.scss';

const BarUrl = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; }; uptadeFoodkList: (arg0: { name: string; price: number; image: string; gramm: number; num: number; sum: number; }) => void; }) => {

    const {
        name,
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
        <div className='bar-url'>
            <div className="bar-url-shadow">
                <div className="bar-url-details">
                    <div className="bar-url-details-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="bar-url-details-info">
                        <h1>{name}</h1>
                        <div className="bar-url-details-info-basket">
                            <p>{basket}</p>
                        </div>
                        <div className="bar-url-details-info-GrammPrice">
                            <h3>{gramm} мл</h3>
                            <div className="bar-url-details-info-GrammPrice-priceButton">
                                <h2>{price} грн.</h2>
                                {btnNone &&
                                    <button className='bar-url-details-info-GrammPrice-priceButton-green' onClick={barBtn}>Замовити</button>
                                }
                                {btnYes &&
                                    <button className='bar-url-details-info-GrammPrice-priceButton-orange' onClick={barBtn}>Заказ прийнято</button>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="bar-url-details-close">
                        <Link to={'/bar'}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Icon_close.svg/2048px-Icon_close.svg.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BarUrl;