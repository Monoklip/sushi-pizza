import { SetStateAction, useEffect, useState } from 'react';
import './display-bar.scss';
import DisplayBarItem from './DisplayBarItem/DisplayBarItem';

const DisplayBar = () => {

    const [url, setUrl] = useState<string>('http://localhost:3000/bar');
    const [data, setData] = useState([]);

    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [gramm, setGramm] = useState<number>(0);
    const [basket, setBasket] = useState<string>('');
    const [image, setImage] = useState<string>('');

    const nameHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setName(event.target.value);
    };

    const priceHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPrice(event.target.value as unknown as number);
    };

    const grammHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setGramm(event.target.value as unknown as number);
    };

    const basketHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setBasket(event.target.value);
    };

    const imageHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setImage(event.target.value);
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
    };

    async function getFood() {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    };

    useEffect(()=>{
        getFood();
    },[data]);
    
    return(
        <div className="display-bar">
            <div className="display-bar-get">
                <h1>Додати</h1>
                <p>Введіть назву</p>
                <input type="text" onChange={nameHandleChange}/>
                <p>Введіть вартість</p>
                <input type="text" onChange={priceHandleChange}/>
                <p>Введіть вагу</p>
                <input type="text" onChange={grammHandleChange}/>
                <p>Введіть інгрідієнти</p>
                <input type="text" onChange={basketHandleChange}/>
                <p>Введіть фото (URL)</p>
                <input type="text" onChange={imageHandleChange}/>
                <button onClick={createBtn}>Додати</button>
            </div>
            <div className="display-bar-delete">
            {data.map((elem: {name: string; price: number; gramm:number; basket: string; image: string; id: number;}) => {
                    return <DisplayBarItem key={elem.id} elem={elem}/>
                })}
            </div>
        </div>
    )
};

export default DisplayBar;