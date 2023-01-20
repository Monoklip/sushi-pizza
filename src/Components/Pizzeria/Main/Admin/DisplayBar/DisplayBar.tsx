import { SetStateAction, useEffect, useState } from 'react';
import './display-bar.scss';
import DisplayBarItem from './DisplayBarItem/DisplayBarItem';

const DisplayBar = () => {

    const [url, setUrl] = useState<string>('http://localhost:3000/bar');
    const [data, setData] = useState<any>([]);

    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [gramm, setGramm] = useState<number>(0);
    const [basket, setBasket] = useState<string>('');
    const [image, setImage] = useState<string>('');

    const [nameValue, setNameValue] = useState<string>('');
    const [priceValue, setPriceValue] = useState<string>('');
    const [grammValue, setGrammValue] = useState<string>('');
    const [basketValue, setBasketValue] = useState<string>('');
    const [imageValue, setImageValue] = useState<string>('');

    const nameHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setName(event.target.value);
        setNameValue(event.target.value);
    };

    const priceHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPrice(event.target.value as unknown as number);
        setPriceValue(event.target.value);
    };

    const grammHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setGramm(event.target.value as unknown as number);
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

    const createBtn = async() => {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                price: price,
                gramm: gramm,
                basket : basket,
                image: image
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).finally(()=>{
            getFood();
        });

        setName('');
        setNameValue('');
        setPrice('' as unknown as number);
        setPriceValue('');
        setGramm('' as unknown as number);
        setGrammValue('');
        setBasket('');
        setBasketValue('');
        setImage('');
        setImageValue('');
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
                <input type="text" onChange={nameHandleChange} value={nameValue}/>
                <p>Введіть вартість</p>
                <input type="text" onChange={priceHandleChange} value={priceValue}/>
                <p>Введіть вагу</p>
                <input type="text" onChange={grammHandleChange} value={grammValue}/>
                <p>Введіть інгрідієнти</p>
                <input type="text" onChange={basketHandleChange} value={basketValue}/>
                <p>Введіть фото (URL)</p>
                <input type="text" onChange={imageHandleChange} value={imageValue}/>
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