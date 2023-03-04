import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './bar-item.scss';

const BarItem = (props: {
    elem: {
        name: string;
        price: number;
        gramm: number;
        basket: string;
        image: string;
        num: number;
    };
    uptadeFoodkList: (arg0: {
        name: string;
        price: number;
        image: string;
        gramm: number;
        num: number;
        sum: number;
    }) => void;

    food: any;
    setFood: any;
    suma: any;
    setSuma: any;
}) => {
    const { name, price, gramm, basket, image } = props.elem;

    const [sumaAllFoods, setSumaAllFoods] = useState(JSON.parse(localStorage.getItem("Suma") as string) || Number);

    const barBtn = () => {
        props.uptadeFoodkList({
            name: name,
            price: price,
            image: image,
            gramm: gramm,
            num: 1,
            sum: price,
        });

        if(btnYes === false){
            props.setSuma(price + props.suma);
            localStorage.setItem("Suma", JSON.stringify(props.suma + sumaAllFoods));
        }
    };
    const { food, setFood } = props;

    const [btnNone, setBtnNone] = useState(true);
    const [btnYes, setBtnYes] = useState(false);

    const getFood = async () => {
        food.map((elem: { name: string }) => {
            if (elem.name === name) {
                setBtnNone(false);
                setBtnYes(true);
            }
        });
    };

    useEffect(() => {
        getFood();
        localStorage.setItem("Suma", JSON.stringify(props.suma));
    }, [food]);

    return(
        <div className='bar-item'>
            <Link to={`./${name}`}>
                <div className="bar-item-info">
                    <div className="bar-item-info-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="bar-item-info-details">
                        <h1>{name}</h1>
                        <p>{basket}</p>
                    </div>
                </div>
            </Link>
            <div className="bar-item-buy">
                <div className="bar-item-buy-price">{price} грн <span> / {gramm} мл</span></div>
                {btnNone && 
                    <button className="bar-item-buy-btn-green" onClick={barBtn}>Замовити</button>    
                }
                {btnYes && 
                    <button className="bar-item-buy-btn-orange" onClick={barBtn}>Заказ прийнято</button>
                }
            </div>
        </div>
    )
};

export default BarItem;