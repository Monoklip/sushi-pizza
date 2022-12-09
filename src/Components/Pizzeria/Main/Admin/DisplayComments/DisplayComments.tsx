import { useEffect, useState } from "react";
import DisplayCommentsItem from "./DisplayCommentsItem/DisplayCommentsItem";
import './display-comments.scss';

const DisplayComments = () => {

    const [url, setUrl] = useState('http://localhost:3000/reviews');
    const [data, setData] = useState([]);

    const getComments = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    };

    useEffect(()=>{
        getComments();
    },[data])

    return(
        <div className="display-comments">
            {data.map((elem: { name: string; phone: number; number: number; text: string; check: string; id: number; }) => {
                return <DisplayCommentsItem key={elem.id} elem={elem}/>
            })}
        </div>
    )
};

export default DisplayComments;