import { SetStateAction, useState } from 'react';
import './display-shared-item.scss';

const DisplaySharedItem = (props: { elem: { name: string; info: string; image: string; id: number; }; }) => {

    const {
        name,
        info,
        image,
        id
    } = props.elem;

    const [url, setUrl] = useState(`http://localhost:3000/shared/${id}`);

    const [displayDelete, setDisplayDelete] = useState<boolean>(true);
    const [displayRename, serDisplayRenme] = useState<boolean>(false);

    const [nameShared, setNameShared] = useState('');
    const [infoShared, setInfoShared] = useState('');
    const [imageShared, setImageShared] = useState('');

    const nameSharedHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNameShared(event.target.value);
    };

    const infoSharedHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInfoShared(event.target.value);
    };

    const imageSharedHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setImageShared(event.target.value);
    };
    
    const deleteBtn = async() => {
        const response = await fetch(url, {
            method: "DELETE"
        });
    };

    const displayRanameBtn = () => {
        setDisplayDelete(false);
        serDisplayRenme(true);
    };

    const displayRenameSaveBtn = async() => {
        const response = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify({
                name: nameShared,
                info: infoShared,
                image: imageShared
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
                <div className='DisplaySharedItem'>
                    <div className="DisplaySharedItem-photo">
                        <img src={`${image}`} alt="" />
                        <button className='DisplaySharedItem-btnDelete' onClick={deleteBtn}>Удалити</button>
                        <button className='DisplaySharedItem-btnRename' onClick={displayRanameBtn}>Редагування</button>
                    </div>
                    <div className="DisplaySharedItem-info">
                        <h2>{name}</h2>
                        <p>{info}</p>
                    </div>
                </div>
            }
            {displayRename && 
                <div className='DisplaySharedItem'>
                    <div className="DisplaySharedItem-photo">
                        <img src={`${image}`} alt="" />
                    </div>
                    <div className="DisplaySharedItem-infoRename">
                        <h1>Редагування</h1>
                        <p>Введіть назву:</p>
                        <input type="text" defaultValue={name} onChange={nameSharedHandleChange}/>
                        <p>Введіть опис:</p>
                        <textarea defaultValue={info} onChange={infoSharedHandleChange}></textarea>
                        <p>Введіть фото (URL)</p>
                        <input type="text" defaultValue={image} onChange={imageSharedHandleChange}/><br />
                        <button className='DisplaySharedItem-btnSave' onClick={displayRenameSaveBtn}>Зберегти</button>
                    </div>
                </div>
            }
        </>
    )
};

export default DisplaySharedItem;