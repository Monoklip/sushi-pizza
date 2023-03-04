import { SetStateAction, useEffect, useState } from 'react';
import './display-bar.scss';
import DisplayBarItem from './DisplayBarItem/DisplayBarItem';
import {
    validCreateFoodName,
    validCreateFoodPrice,
    validCreateFoodGramm,
    validCreateFoodBasket,
    validCreateFoodImage
} from '../../../../Regexp/Regexp';

const DisplayBar = () => {

    const [url, setUrl] = useState<string>('http://localhost:3000/bar');
    const [data, setData] = useState<any>([]);

    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [gramm, setGramm] = useState<string>('');
    const [basket, setBasket] = useState<string>('');
    const [image, setImage] = useState<string>('');

    const [nameValue, setNameValue] = useState<string>('');
    const [priceValue, setPriceValue] = useState<string>('');
    const [grammValue, setGrammValue] = useState<string>('');
    const [basketValue, setBasketValue] = useState<string>('');
    const [imageValue, setImageValue] = useState<string>('');

    const [nameBorder, setNameBorder] = useState<string>('');
    const [priceBorder, setPriceBorder] = useState<string>('');
    const [grammBorder, setGrammBorder] = useState<string>('');
    const [basketBorder, setBasketBorder] = useState<string>('');
    const [imageBorder, setImageBorder] = useState<string>('');

    const [textError, setTextError] = useState<string>('');

    const nameHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setName(event.target.value);
        setNameValue(event.target.value);
    };

    const priceHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPrice(event.target.value);
        setPriceValue(event.target.value);
    };

    const grammHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setGramm(event.target.value);
        setGrammValue(event.target.value);
    };

    const basketHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setBasket(event.target.value);
        setBasketValue(event.target.value);
    };

    const imageHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setImage(event.target.value);
        setImageValue(event.target.value);
    };

    const createBtn = async () => {
        if (validCreateFoodName.test(name) && validCreateFoodPrice.test(gramm) && validCreateFoodPrice.test(price) && validCreateFoodBasket.test(basket) && validCreateFoodImage.test(image)) {
            await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    price: price,
                    gramm: gramm,
                    basket: basket,
                    image: image
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }).finally(() => {
                getFood();
            });

            setName('');
            setNameValue('');
            setPrice('');
            setPriceValue('');
            setGramm('');
            setGrammValue('');
            setBasket('');
            setBasketValue('');
            setImage('');
            setImageValue('');

            setTextError('');

            setNameBorder('#9cc000');
            setPriceBorder('#9cc000');
            setGrammBorder('#9cc000');
            setBasketBorder('#9cc000');
            setImageBorder('#9cc000');
        }
        else {
            if (!validCreateFoodName.test(name)) {
                setTextError('Заповніть всі поля');
                setNameBorder('red');
            }
            else {
                setNameBorder('#9cc000');
            }
            if (!validCreateFoodPrice.test(price)) {
                setTextError('Заповніть всі поля');
                setPriceBorder('red');
            }
            else {
                setPriceBorder('#9cc000');
            }
            if (!validCreateFoodGramm.test(gramm)) {
                setTextError('Заповніть всі поля');
                setGrammBorder('red');
            }
            else {
                setGrammBorder('#9cc000');
            }
            if (!validCreateFoodBasket.test(basket)) {
                setTextError('Заповніть всі поля');
                setBasketBorder('red');
            }
            else {
                setBasketBorder('#9cc000');
            }
            if (!validCreateFoodImage.test(image)) {
                setTextError('Заповніть всі поля');
                setImageBorder('red');
            }
            else {
                setImageBorder('#9cc000');
            }
        }
    };

    const getFood = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    };

    useEffect(()=>{
        getFood();
    },[]);
    
    return(
        <div className="display-bar">
            <div className="display-bar-get">
                <h1>Додати</h1>
                <p>Введіть назву</p>
                <input
                    type="text"
                    onChange={nameHandleChange}
                    value={nameValue}
                    style={{ borderColor: `${nameBorder}` }}
                />
                <p>Введіть вартість</p>
                <input 
                    type="text" 
                    onChange={priceHandleChange} 
                    value={priceValue} 
                    style={{ borderColor: `${priceBorder}` }} 
                />
                <p>Введіть вагу</p>
                <input 
                    type="text" 
                    onChange={grammHandleChange} 
                    value={grammValue} 
                    style={{ borderColor: `${grammBorder}` }} 
                />
                <p>Введіть інгрідієнти</p>
                <input 
                    type="text" 
                    onChange={basketHandleChange} 
                    value={basketValue} 
                    style={{ borderColor: `${basketBorder}` }} 
                />
                <p>Введіть фото (URL)</p>
                <input 
                    type="text" 
                    onChange={imageHandleChange} 
                    value={imageValue} 
                    style={{ borderColor: `${imageBorder}` }} 
                />
                <div className="display-bar-get-textError">{textError}</div>
                <button onClick={createBtn}>Додати</button>
            </div>
            <div className="display-bar-delete">
            {data.map((elem: {name: string; price: number; gramm:number; basket: string; image: string; id: number;}) => {
                    return <DisplayBarItem key={elem.id} elem={elem} getFood={getFood}/>
                })}
            </div>
        </div>
    )
};

export default DisplayBar;