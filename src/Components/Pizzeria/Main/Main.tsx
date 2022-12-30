import "./main.scss";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sushi from "./Sushi/Sushi";
import Pizza from "./Pizza/Pizza";
import Home from "./Home/Home";
import About from "./About/About";
import Vacancies from "./Vacancies/Vacancies";
import Feedback from "./Feedback/Feedback";
import Shared from "./Shared/Shared";
import Admin from "./Admin/Admin";
import Salate from "./Salate/Salate";
import Bar from "./Bar/Bar";
import NotPageFound from "./NotPageFound/NotPageFound";
import SushiUrl from "./Sushi/SushiUrl/SushiUrl";
import SalateUrl from "./Salate/SalateUrl/SalateUrl";
import PizzaUrl from "./Pizza/PizzaUrl/PizzaUrl";
import BarUrl from "./Bar/BarUrl/BarUrl";

const Main = (props: {
    uptadeFoodkList: {
        (arg0: {
            name: string;
            price: number;
            image: string;
            gramm: number;
            num: number;
            sum: number;
        }): void;
    };
    food: any;
    setFood: any;
}) => {
    const [sushiUrl, setSushiUrl] = useState("http://localhost:3000/sushi");
    const [sushiData, setSushiData] = useState([]);

    const getSushi = async () => {
        const response = await fetch(sushiUrl);
        const sushiData = await response.json();
        setSushiData(sushiData);
    };

    useEffect(() => {
        getSushi();
    }, [sushiData]);

    const [pizzaUrl, setPizzaUrl] = useState("http://localhost:3000/pizza");
    const [pizzaData, setPizzaData] = useState([]);

    const getPizza = async () => {
        const response = await fetch(pizzaUrl);
        const pizzaData = await response.json();
        setPizzaData(pizzaData);
    };

    useEffect(() => {
        getPizza();
    }, [pizzaData]);

    const [salateUrl, setSalateUrl] = useState("http://localhost:3000/salate");
    const [salateData, setSalateData] = useState([]);

    const getSalate = async () => {
        const response = await fetch(salateUrl);
        const salateData = await response.json();
        setSalateData(salateData);
    };

    useEffect(() => {
        getSalate();
    }, [salateData]);

    const [barUrl, setBarUrl] = useState("http://localhost:3000/bar");
    const [barData, setBarData] = useState([]);

    const getBar = async () => {
        const response = await fetch(barUrl);
        const barData = await response.json();
        setBarData(barData);
    };

    useEffect(() => {
        getBar();
    }, [barData]);

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
                path="/sushi"
                element={
                    <Sushi
                        uptadeFoodkList={props.uptadeFoodkList}
                        food={props.food}
                        setFood={props.setFood}
                    />
                }
            ></Route>
            <Route
                path="/pizza"
                element={<Pizza uptadeFoodkList={props.uptadeFoodkList} />}
            ></Route>
            <Route
                path="/salate"
                element={<Salate uptadeFoodkList={props.uptadeFoodkList} />}
            ></Route>
            <Route
                path="/bar"
                element={<Bar uptadeFoodkList={props.uptadeFoodkList} />}
            ></Route>
            <Route path="/shared" element={<Shared />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/feedback" element={<Feedback />}></Route>
            <Route path="/vacancies" element={<Vacancies />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/delivery"></Route>
            <Route path="/contacts"></Route>
            <Route path="*" element={<NotPageFound />}></Route>
            {sushiData.map(
                (elem: {
                    name: string;
                    price: number;
                    gramm: number;
                    basket: string;
                    image: string;
                }) => {
                    return (
                        <Route
                            path={`/sushi/${elem.name}`}
                            element={
                                <SushiUrl
                                    elem={elem}
                                    key={elem.name}
                                    uptadeFoodkList={props.uptadeFoodkList}
                                />
                            }
                        ></Route>
                    );
                }
            )}
            {pizzaData.map(
                (elem: {
                    name: string;
                    price: number;
                    gramm: number;
                    basket: string;
                    image: string;
                }) => {
                    return (
                        <Route
                            path={`/pizza/${elem.name}`}
                            element={
                                <PizzaUrl
                                    elem={elem}
                                    key={elem.name}
                                    uptadeFoodkList={props.uptadeFoodkList}
                                />
                            }
                        ></Route>
                    );
                }
            )}
            {salateData.map(
                (elem: {
                    name: string;
                    price: number;
                    gramm: number;
                    basket: string;
                    image: string;
                }) => {
                    return (
                        <Route
                            path={`/salate/${elem.name}`}
                            element={
                                <SalateUrl
                                    elem={elem}
                                    key={elem.name}
                                    uptadeFoodkList={props.uptadeFoodkList}
                                />
                            }
                        ></Route>
                    );
                }
            )}
            {barData.map(
                (elem: {
                    name: string;
                    price: number;
                    gramm: number;
                    basket: string;
                    image: string;
                }) => {
                    return (
                        <Route
                            path={`/bar/${elem.name}`}
                            element={
                                <BarUrl
                                    elem={elem}
                                    key={elem.name}
                                    uptadeFoodkList={props.uptadeFoodkList}
                                />
                            }
                        ></Route>
                    );
                }
            )}
        </Routes>
    );
};

export default Main;
