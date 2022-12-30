import "./icon-menu.scss";
import { Link } from "react-router-dom";

const IconMenu = () => {
    return (
        <div className="icon-menu">
            <Link to={"/sushi"}>
                <img src="https://panda-sushi.com.ua/img/main-panda-sushi.png"/>
                <h1>СУШІ</h1>
            </Link>
            <Link to={"/pizza"}>
                <img src="https://panda-sushi.com.ua/img/main-panda-pizza.png"/>
                <h1>ПІЦА</h1>
            </Link>
            <Link to={"/salate"}>
                <img src="https://panda-sushi.com.ua/img/main-panda-salad.png"/>
                <h1>ВОК & САЛАТИ</h1>
            </Link>
            <Link to={"/bar"}>
                <img src="https://panda-sushi.com.ua/img/main-panda-bar.png"/>
                <h1>БАР</h1>
            </Link>
        </div>
    );
};

export default IconMenu;
