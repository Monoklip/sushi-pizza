import { useEffect, useState } from "react";
import IconMenu from "../IconMenu/IconMenu";
import "./pizza.scss";
import PizzaItem from "./PizzaItem/PizzaItem";

const Pizza = (props: {
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
    const [pizza, setPizza] = useState([]);
    const [urlPizza, setUrlPizza] = useState("http://localhost:3000/pizza");

    const pizzaBtn = async () => {
        const response = await fetch(urlPizza);
        const pizza = await response.json();
        setPizza(pizza);
    };

    useEffect(() => {
        pizzaBtn();
    }, [pizza]);

    return (
        <div className="pizza">
            <IconMenu />
            <div className="pizza-title">
                <h1>ПІЦА</h1>
            </div>
            <div className="pizza-items">
                {pizza.map(
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
                            <PizzaItem
                            elem={elem}
                            key={elem.id}
                            uptadeFoodkList={props.uptadeFoodkList}
                            pizza={pizza}
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

export default Pizza;
