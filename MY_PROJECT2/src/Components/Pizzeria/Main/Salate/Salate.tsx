import { useState } from 'react';
import IconMenu from '../IconMenu/IconMenu';
import './salate.scss';
import SalateItem from './SalateItem/SalateItem';

const Salate = (props: { uptadeFoodkList: any; }) => {

    const [salate, setSalate] = useState([]);
    const [urlSalate, setUrlSalate] = useState('http://localhost:3000/salate');

    (async function salateBtn() {
        const response = await fetch(urlSalate);
        const salate = await response.json();
        setSalate(salate);
    }());

    return(
        <div className='salate'>
            <IconMenu/>
            <h1>Салати</h1>
            <div className="salate-items">
                {salate.map((elem: { name: string; price: number; gramm: number; basket: string; image: string; num: number; id: number;}) => {
                    return <SalateItem elem={elem} key={elem.id} uptadeFoodkList={props.uptadeFoodkList}/>
                })}
            </div>
        </div>
    )
};

export default Salate;