import { useState } from 'react';
import './display-shared-item.scss';

const DisplaySharedItem = (props: { elem: { name: string; info: string; image: string; id: number; }; }) => {

    const {
        name,
        info,
        image,
        id
    } = props.elem;

    const [delUrl, setDelUrl] = useState(`http://localhost:3000/shared/${id}`);
    
    const deleteBtn = async() => {
        const response = await fetch(delUrl, {
            method: "DELETE"
        });
    };    

    return(
        <div className='DisplaySharedItem'>
            <div className="DisplaySharedItem-photo">
                <img src={`${image}`} alt="" />
                <button onClick={deleteBtn}>Удалити</button>
            </div>
            <div className="DisplaySharedItem-info">
                <h2>{name}</h2>
                <p>{info}</p>
            </div>
        </div>
    )
};

export default DisplaySharedItem;