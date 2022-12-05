import { useState } from 'react';
import './display-salate-item.scss';

const DisplaySalateItem = (props: { elem: { name: string; price: string; gramm: string; basket: string; image: string; id: number; }; }) => {

    const {
        name,
        price,
        gramm,
        basket,
        image,
        id
    } = props.elem;

    const [delUrl, setDelUrl] = useState(`http://localhost:3000/salate/${id}`);
    
    const deleteBtn = async() => {
        const response = await fetch(delUrl, {
            method: "DELETE"
        });
    };

    return(
        <div className='display-salate-item'>
            <div className="display-salate-item-info">
                <div className="display-salate-item-info-image">
                    <img src={`${image}`} alt="" />
                </div>
                <div className="display-salate-item-info-details">
                    <h1>{name}</h1>
                    <p>{basket}</p>
                </div>
            </div>
            <div className="display-salate-item-buy">
                <div className="display-salate-item-buy-price">{price} грн <span> / {gramm} грам</span></div>
                <button className="display-salate-item-buy-btn" onClick={deleteBtn}>Удалити</button>
            </div>
        </div>
    )
};

export default DisplaySalateItem;