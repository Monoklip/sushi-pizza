import { SetStateAction, useEffect, useState } from 'react';
import './display-sushi.scss';
import DisplaySushiItem from './DisplaySushiItem/DisplaySushiItem';

const DisplaySushi = () => {

    const [url, setUrl] = useState('http://localhost:3000/sushi');
    const [data, setData] = useState([]);

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
    },[data]);
    
    return(
        <div className="display-sushi">
            <div className="display-sushi-get">
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
            <div className="display-sushi-delete">
                {data.map((elem: {name: string; price: number; gramm:number; basket: string; image: string; id: number;}) => {
                    return <DisplaySushiItem key={elem.id} elem={elem}/>
                })}
            </div>
        </div>
    )
};

export default DisplaySushi;