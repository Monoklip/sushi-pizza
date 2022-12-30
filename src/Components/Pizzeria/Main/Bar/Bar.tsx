import { useEffect, useState } from "react";
import IconMenu from "../IconMenu/IconMenu";
import "./bar.scss";
import BarItem from "./BarItem/BarItem";

const Bar = (props: {
    uptadeFoodkList: (arg0: {
        name: string;
        price: number;
        image: string;
        gramm: number;
        num: number;
        sum: number;
    }) => void;
}) => {
    const [urlBar, setUrlBar] = useState("http://localhost:3000/bar");
    const [bar, setBar] = useState([]);

    async function barBtn() {
        const response = await fetch(urlBar);
        const bar = await response.json();
        setBar(bar);
    }

    useEffect(() => {
        barBtn();
    }, [bar]);

    return (
        <div className="bar">
            <IconMenu />
            <div className="bar-title">
                <h1>НАПОЇ</h1>
            </div>
            <div className="bar-items">
                {bar.map(
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
                            <BarItem
                                elem={elem}
                                key={elem.id}
                                uptadeFoodkList={props.uptadeFoodkList}
                                bar={bar}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default Bar;
