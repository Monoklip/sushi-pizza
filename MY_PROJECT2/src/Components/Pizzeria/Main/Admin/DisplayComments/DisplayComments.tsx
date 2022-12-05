import { useEffect, useState } from "react";
import DisplayCommentsItem from "./DisplayCommentsItem/DisplayCommentsItem";
import './display-comments.scss';

const DisplayComments = () => {

    const [url, setUrl] = useState('http://localhost:3000/reviews');
    const [data, setData] = useState([]);

    async function getComments(){
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    };

    useEffect(()=>{
        getComments();
    },[data])

    return(
        <div className="display-comments">
            {data.map(elem => {
                return <DisplayCommentsItem elem={elem}/>
            })}
        </div>
    )
};

export default DisplayComments;