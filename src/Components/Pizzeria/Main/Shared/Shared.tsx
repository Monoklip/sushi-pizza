import { useEffect, useState } from "react";
import "./shared.scss";
import SharedItem from "./SharedItem/SharedItem";

const Shared = () => {
    const [urlShared, setUrlShared] = useState("http://localhost:3000/shared");
    const [sharedData, setSharedData] = useState([]);

    const getShared = async() => {
        const response = await fetch(urlShared);
        const sharedData = await response.json();
        setSharedData(sharedData);
    };

    useEffect(()=>{
        getShared();
    },[])

    return (
        <div className="shared">
            {sharedData.map(
                (elem: {
                    name: string;
                    image: string;
                    info: string;
                    id: number;
                }) => {
                    return <SharedItem elem={elem} key={elem.id} />;
                }
            )}
        </div>
    );
};

export default Shared;