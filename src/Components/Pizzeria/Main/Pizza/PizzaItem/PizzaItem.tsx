import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './pizza-item.scss';

const PizzaItem = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; num: number }; uptadeFoodkList: (arg0: { name: string; price: number; image: string; gramm: number; num: number; sum: number}) => void; pizza: any; }) => {

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
    },[props.pizza]);

    return(
        <div className='pizza-item'>
            <Link to={`./${name}`}>
                <div className="pizza-item-info">
                    <div className="pizza-item-info-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="pizza-item-info-details">
                        <h1>{name}</h1>
                        <p>{basket}</p>
                    </div>
                </div>
            </Link>
            <div className="pizza-item-buy">
                <div className="pizza-item-buy-price">{price} грн <span> / {gramm} гр</span></div>
                {btnNone && 
                    <button className="pizza-item-buy-btn-green" onClick={pizzaBtn}>Замовити</button>    
                }
                {btnYes && 
                    <button className="pizza-item-buy-btn-orange" onClick={pizzaBtn}>Хочу ще</button>
                }
            </div>
        </div>
    )
};

export default PizzaItem;