import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sushi-item.scss";

const SushiItem = (props: {
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
    const { food, setFood } = props;

    const [sumaAllFoods, setSumaAllFoods] = useState(JSON.parse(localStorage.getItem("Suma") as string) || Number);
    
    const [btnNone, setBtnNone] = useState(true);
    const [btnYes, setBtnYes] = useState(false);

    const sushiBtn = () => {
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
       
    return (
        <div className='sushi-item'>
            <Link to={`./${name}`}>
                <div className="sushi-item-info">
                    <div className="sushi-item-info-image">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="sushi-item-info-details">
                        <h1>{name}</h1>
                        <p>{basket}</p>
                    </div>
                </div>
            </Link>
            <div className="sushi-item-buy">
                <div className="sushi-item-buy-price">{price} грн <span> / {gramm} гр</span></div>
                {btnNone &&
                    <button className="sushi-item-buy-btn-green" onClick={sushiBtn}>Замовити</button>
                }
                {btnYes &&
                    <button className="sushi-item-buy-btn-orange" onClick={sushiBtn}>Заказ прийнято</button>
                }
            </div>
        </div>
    )
};

export default SushiItem;