import { useState } from 'react';
import './display-bar-item.scss';

const DisplayBarItem = (props: { elem: { name: string; price: string; gramm: string; basket: string; image: string; id: number; }; }) => {

    const {
        name,
        price,
        gramm,
        basket,
        image,
        id
    } = props.elem;

    const [delUrl, setDelUrl] = useState(`http://localhost:3000/bar/${id}`);
    
    const deleteBtn = async() => {
        const response = await fetch(delUrl, {
            method: "DELETE"
        });
    };

    return(
        <div className='display-bar-item'>
            <div className="display-bar-item-info">
                <div className="display-bar-item-info-image">
                    <img src={`${image}`} alt="" />
                </div>
                <div className="display-bar-item-info-details">
                    <h1>{name}</h1>
                    <p>{basket}</p>
                </div>
            </div>
            <div className="display-bar-item-buy">
                <div className="display-bar-item-buy-price">{price} грн <span> / {gramm} грам</span></div>
                <button className="display-bar-item-buy-btn" onClick={deleteBtn}>Удалити</button>
            </div>
        </div>
    )
};

export default DisplayBarItem;