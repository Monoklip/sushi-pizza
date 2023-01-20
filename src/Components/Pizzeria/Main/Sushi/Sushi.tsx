import { useState, useEffect } from "react";
import IconMenu from "../IconMenu/IconMenu";
import "./sushi.scss";
import SushiItem from "./SushiItem/SushiItem";

const Sushi = (props: {
    uptadeFoodkList: (arg0: {
        name: string;
        price: number;
        image: string;
        gramm: number;
        num: number;
        sum: number;
    }) => void;
    food: any;
    setFood: any;
    suma: any; 
    setSuma: any;
}) => {
    const [sushi, setSushi] = useState([]);
    const [urlSushi, setUrlSushi] = useState("http://localhost:3000/sushi");

    const sushiBtn = async() => {
        const response = await fetch(urlSushi);
        const sushi = await response.json();
        setSushi(sushi);
    };

    useEffect(() => {
        sushiBtn();
    }, []);

    return (
        <div className="sushi">
            <IconMenu />
            <div className="sushi-title">
                <h1>СУШІ</h1>
            </div>
            <div className="sushi-items">
                {sushi.map(
                    (elem: {
                        name: string;
                        price: number;
                        gramm: number;
                        basket: string;
                        image: string;
                        num: number;
                        id: number;
                    }) => {
                        return (
                            <SushiItem
                                elem={elem}
                                key={elem.id}
                                uptadeFoodkList={props.uptadeFoodkList}
                                food={props.food}
                                setFood={props.setFood}
                                suma={props.suma} 
                                setSuma={props.setSuma}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default Sushi;