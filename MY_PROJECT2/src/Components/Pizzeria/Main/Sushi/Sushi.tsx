import { useState } from 'react';
import IconMenu from '../IconMenu/IconMenu';
import './sushi.scss';
import SushiItem from './SushiItem/SushiItem';

const Sushi = (props: { uptadeFoodkList: any; }) => {

    const [sushi, setSushi] = useState([]);
    const [urlSushi, setUrlSushi] = useState('http://localhost:3000/sushi');

    (async function sushiBtn() {
        const response = await fetch(urlSushi);
        const sushi = await response.json();
        setSushi(sushi);
    }());

    return(
        <div className='sushi'>
            <IconMenu/>
            <h1>СУШІ</h1>
            <div className="sushi-items">
                {sushi.map((elem: { name: string; price: number; gramm: number; basket: string; image: string; num: number; id: number;}) => {
                    return <SushiItem elem={elem} key={elem.id} uptadeFoodkList={props.uptadeFoodkList}/>
                })}
            </div>
        </div>
    )
};

export default Sushi;