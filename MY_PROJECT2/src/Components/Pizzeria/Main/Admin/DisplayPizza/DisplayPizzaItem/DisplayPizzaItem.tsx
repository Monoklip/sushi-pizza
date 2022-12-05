import { useState } from 'react';
import './display-pizza-item.scss';

const DisplayPizzaItem = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; id: number; }; }) => {

    const {
        name,
        price,
        gramm,
        basket,
        image,
        id
    } = props.elem;

    const [delUrl, setDelUrl] = useState(`http://localhost:3000/pizza/${id}`);
    
    const deleteBtn = async() => {
        const response = await fetch(delUrl, {
            method: "DELETE"
        });
    };

    return(
        <div className='display-pizza-item'>
            <div className="display-pizza-item-info">
                <div className="display-pizza-item-info-image">
                    <img src={`${image}`} alt="" />
                </div>
                <div className="display-pizza-item-info-details">
                    <h1>{name}</h1>
                    <p>{basket}</p>
                </div>
            </div>
            <div className="display-pizza-item-buy">
                <div className="display-pizza-item-buy-price">{price} грн <span> / {gramm} грам</span></div>
                <button className="display-pizza-item-buy-btn" onClick={deleteBtn}>Удалити</button>
            </div>
        </div>
    )
};

export default DisplayPizzaItem;