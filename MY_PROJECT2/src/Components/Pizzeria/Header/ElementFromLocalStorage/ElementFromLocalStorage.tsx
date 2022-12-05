import { useEffect, useState } from 'react';
import './elementFromLocalStorage.scss';

const ElementFromLocalStorage = (props: { elem: { name: string; price: number; image: string; gramm: number; num: number; sum: number; }; setFood: any; food: any;}) => {

    const {
        name, 
        price,
        image,
        gramm,
        num,
        sum
    } = props.elem;

    const { setFood, food } = props;

    const [number, setNumber] = useState(num);

    const numberPlusBtn = () => {
        setFood(food.map((elem: {
            price: number;
            gramm: number;
            image: string; 
            name: string; 
            num: number;
            sum: number;
        }) => {
            if(elem.name === name){
                setNumber(number + 1);
                return {
                    name: name,
                    image: image,
                    gramm: gramm,
                    price: price,
                    num: number + 1,
                    sum: price * (number + 1)
                }
            }
            else{
                return elem;
            }
        }));
        localStorage.setItem('Food', JSON.stringify(food));
    };

    const numberMinusBtn = () => {
        if(number >= 2){
            setNumber(number - 1);
            
            setFood(food.map((elem: {
                price: number;
                gramm: number;
                image: string; 
                name: string; 
                num: number;
                sum: number;
            }) => {
                if(elem.name === name){
                   return {
                        name: name,
                        image: image,
                        gramm: gramm,
                        price: price,
                        num: number - 1,
                        sum: price * (number - 1)
                    }
                }
                else{
                    return elem;
                }
            }));
            localStorage.setItem('Food', JSON.stringify(food));
        }
    };

    useEffect(()=>{
        localStorage.setItem('Food', JSON.stringify(food));
        setFood(JSON.parse(localStorage.getItem('Food') as string) || []);
    },[number]);
    
    return(
        <div className='elementFromLocalStorage'>
            <div className="elementFromLocalStorage-image">
                <img src={`${image}`} alt="" />
            </div>
            <div className="elementFromLocalStorage-name">
                <h4>{name}</h4>
                <p>{gramm} грам</p>
                <div className="elementFromLocalStorage-name-num">
                    <button className='elementFromLocalStorage-name-num-btn' onClick={numberPlusBtn}>+</button>
                    <p>{number} шт.</p>
                    <button className='elementFromLocalStorage-name-num-btn' onClick={numberMinusBtn}>-</button>
                    <p>{sum} грн</p>
                </div>
            </div>
            <div className="elementFromLocalStorage-price">
                <h4>{sum}</h4>
                <p>грн</p>
            </div>
        </div>
    )
};

export default ElementFromLocalStorage;