import { useEffect, useState } from "react";
import IconMenu from "../IconMenu/IconMenu";
import "./salate.scss";
import SalateItem from "./SalateItem/SalateItem";

const Salate = (props: {
    uptadeFoodkList: (arg0: {
        name: string;
        price: number;
        image: string;
        gramm: number;
        num: number;
        sum: number;
    }) => void;
}) => {
    const [salate, setSalate] = useState([]);
    const [urlSalate, setUrlSalate] = useState("http://localhost:3000/salate");

    const salateBtn = async () => {
        const response = await fetch(urlSalate);
        const salate = await response.json();
        setSalate(salate);
    };

    useEffect(() => {
        salateBtn();
    }, [salate]);

    return (
        <div className="salate">
            <IconMenu />
            <div className="salate-title">
                <h1>САЛАТИ</h1>
            </div>
            <div className="salate-items">
                {salate.map(
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
                            <SalateItem
                                elem={elem}
                                key={elem.id}
                                uptadeFoodkList={props.uptadeFoodkList}
                                salate={salate}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default Salate;
