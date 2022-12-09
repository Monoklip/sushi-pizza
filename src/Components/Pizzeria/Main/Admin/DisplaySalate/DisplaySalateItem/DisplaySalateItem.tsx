import { SetStateAction, useState } from 'react';
import './display-salate-item.scss';

const DisplaySalateItem = (props: { elem: { name: string; price: number; gramm: number; basket: string; image: string; id: number; }; }) => {

    const {
        name,
        price,
        gramm,
        basket,
        image,
        id
    } = props.elem;

    const [url, setUrl] = useState(`http://localhost:3000/salate/${id}`);

    const [displayDelete, setDisplayDelete] = useState<boolean>(true);
    const [displayRename, serDisplayRenme] = useState<boolean>(false);

    const [newName, setNewName] = useState<string>('');
    const [newPrice, setNewPrice] = useState<number>(0);
    const [newGramm, setNewGramm] = useState<number>(0);
    const [newBasket, setNewBasket] = useState<string>('');
    const [newImage, setNewImage] = useState<string>('');

    const newNameHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNewName(event.target.value);
    };

    const newPriceHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNewPrice(event.target.value as unknown as number);
    };

    const newGrammHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNewGramm(event.target.value as unknown as number);
    };

    const newBasketHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNewBasket(event.target.value);
    };

    const newImageHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNewImage(event.target.value);
    };
    
    const deleteBtn = async() => {
        const response = await fetch(url, {
            method: "DELETE"
        });
    };    

    const renameBtn = () => {
        setDisplayDelete(false);
        serDisplayRenme(true);
    };

    const renameBtnEnd = async() => {
        const response = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify({
                name: newName,
                price: newPrice,
                gramm: newGramm,
                basket: newBasket,
                image: newImage
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });     

        setDisplayDelete(true);
        serDisplayRenme(false);
    };

    return(
        <>
            {displayDelete &&
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
                    <div className="display-salate-item-buy-price">{price} грн <span> / {gramm} грам</span></div>
                    <div className="display-salate-item-buy">
                        <button className="display-salate-item-buy-btnDelete" onClick={deleteBtn}>Удалити</button>
                        <button className="display-salate-item-buy-btnRename" onClick={renameBtn}>Редагувати</button>
                    </div>
                </div>
            }
            {displayRename && 
                <div className='display-salate-item-rename'>
                    <h1>Редагування</h1>
                    <p>Введіть назву</p>
                    <input type="text" defaultValue={name} onChange={newNameHandleChange}/>
                    <p>Введіть вартість</p>
                    <input type="text" defaultValue={price} onChange={newPriceHandleChange}/>
                    <p>Введіть вагу</p>
                    <input type="text" defaultValue={gramm} onChange={newGrammHandleChange}/>
                    <p>Введіть інгрідієнти</p>
                    <input type="text" defaultValue={basket} onChange={newBasketHandleChange}/>
                    <p>Введіть фото (URL)</p>
                    <input type="text" defaultValue={image} onChange={newImageHandleChange}/>
                    <button onClick={renameBtnEnd}>Завершити редагування</button>
                </div>
            }
        </>
    )
};

export default DisplaySalateItem;