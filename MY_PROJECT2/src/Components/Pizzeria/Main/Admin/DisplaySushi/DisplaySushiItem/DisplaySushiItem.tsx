import { useState } from 'react';
import './display-sushi-item.scss';

const DisplaySushiItem = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; id: number; }; }) => {

    const {
        name,
        price,
        gramm,
        basket,
        image,
        id
    } = props.elem;

    const [delUrl, setDelUrl] = useState(`http://localhost:3000/sushi/${id}`);
    
    const deleteBtn = async() => {
        const response = await fetch(delUrl, {
            method: "DELETE"
        });
    };    

    return(
        <div className='display-sushi-item'>
            <div className="display-sushi-item-info">
                <div className="display-sushi-item-info-image">
                    <img src={`${image}`} alt="" />
                </div>
                <div className="display-sushi-item-info-details">
                    <h1>{name}</h1>
                    <p>{basket}</p>
                </div>
            </div>
            <div className="display-sushi-item-buy">
                <div className="display-sushi-item-buy-price">{price} грн <span> / {gramm} грам</span></div>
                <button className="display-sushi-item-buy-btn" onClick={deleteBtn}>Удалити</button>
            </div>
        </div>
    )
};

export default DisplaySushiItem;