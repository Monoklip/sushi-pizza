import { useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import "./pizzeria.scss";

const Pizzeria = () => {
    const foodFromLocalStorage = JSON.parse(localStorage.getItem("Food") as string) || [];
    const [food, setFood] = useState(foodFromLocalStorage);

    const uptadeFoodkList = (newList: any) => {
        const audit = (elem: { name: any }) => elem.name === newList.name;

        if (food.some(audit) === false) {
            setFood([...food, newList]);
            localStorage.setItem("Food", JSON.stringify([...food, newList]));
        } else {
            alert("Ця страва вже знаходиться у вашому кошику");
        }
    };

    return (
        <div className="pizzeria">
            <Header food={food} setFood={setFood} />
            <Main
                uptadeFoodkList={uptadeFoodkList}
                food={food}
                setFood={setFood}
            />
            <Footer />
        </div>
    );
};

export default Pizzeria;