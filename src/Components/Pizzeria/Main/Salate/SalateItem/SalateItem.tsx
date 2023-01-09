import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './salate-item.scss';

const SalateItem = (props: {
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

    salate: any;
    food: any;
    setFood: any;
    suma: any;
    setSuma: any;
}) => {
    const { name, price, gramm, basket, image } = props.elem;

    const [sumaAllFoods, setSumaAllFoods] = useState(JSON.parse(localStorage.getItem("Suma") as string) || Number);

    const salateBtn = () => {
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
    }, [props.salate]);

    return(
        <div className='salate-item'>
            <Link to={`./${name}`}>
                <div className="salate-item-info">
                    <div className="salate-item-info-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="salate-item-info-details">
                        <h1>{name}</h1>
                        <p>{basket}</p>
                    </div>
                </div>
            </Link>
            <div className="salate-item-buy">
                <div className="salate-item-buy-price">{price} грн <span> / {gramm} гр</span></div>
                {btnNone && 
                    <button className="salate-item-buy-btn-green" onClick={salateBtn}>Замовити</button>    
                }
                {btnYes && 
                    <button className="salate-item-buy-btn-orange" onClick={salateBtn}>Заказ прийнято</button>
                }
            </div>
        </div>
    )
};

export default SalateItem;