import { SetStateAction, useState } from "react";
import "./admin.scss";
import DisplayBar from "./DisplayBar/DisplayBar";
import DisplayComments from "./DisplayComments/DisplayComments";
import DisplayPizza from "./DisplayPizza/DisplayPizza";
import DisplaySalate from "./DisplaySalate/DisplaySalate";
import DisplayShared from "./DisplayShared/DisplayShared";
import DisplaySushi from "./DisplaySushi/DisplaySushi";

const Admin = () => {
    const [login, seLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [displaySingIn, setDisplaySingIn] = useState<boolean>(true);
    const [displaySetting, setDisplaySetting] = useState<boolean>(false);

    const [displaySushi, setDisplaySushi] = useState<boolean>(false);
    const [displayPizza, setDisplayPizza] = useState<boolean>(false);
    const [displaySalate, setDisplaySalate] = useState<boolean>(false);
    const [displayBar, setDisplayBar] = useState<boolean>(false);
    const [displayComments, setDisplayComments] = useState<boolean>(false);
    const [displayShared, setDisplayShared] = useState<boolean>(false);

    const [loginBorder, setLoginBorder] = useState<string>("rgb(16, 98, 192)");
    const [passwordBorder, setPasswordBorder] = useState<string>("rgb(16, 98, 192)");

    const loginHandleChange = (event: {target: { value: SetStateAction<string> };}) => {
        seLogin(event.target.value);
    };

    const passwordHandleChange = (event: {target: { value: SetStateAction<string> };}) => {
        setPassword(event.target.value);
    };

    const validKeyLogin = () => {
        if (login === "admin") {
            setLoginBorder("green");
        } else if (login === "") {
            setLoginBorder("rgb(16, 98, 192)");
        } else {
            setLoginBorder("red");
        }
    };

    const validKeyPassword = () => {
        if (password === "admin") {
            setPasswordBorder("green");
        } else if (password === "") {
            setPasswordBorder("rgb(16, 98, 192)");
        } else {
            setPasswordBorder("red");
        }
    };

    const singInBtn = () => {
        if (login === "admin" && password === "admin") {
            setDisplaySingIn(false);
            setDisplaySetting(true);
        } else {
            alert("Постороннім вхід заборонено");
        }
    };

    const displaySushiBtn = () => {
        setDisplaySushi(true);
        setDisplayPizza(false);
        setDisplaySalate(false);
        setDisplayBar(false);
        setDisplayComments(false);
        setDisplayShared(false);
    };

    const displayPizzaBtn = () => {
        setDisplaySushi(false);
        setDisplayPizza(true);
        setDisplaySalate(false);
        setDisplayBar(false);
        setDisplayComments(false);
        setDisplayShared(false);
    };

    const displaySalateBtn = () => {
        setDisplaySushi(false);
        setDisplayPizza(false);
        setDisplaySalate(true);
        setDisplayBar(false);
        setDisplayComments(false);
        setDisplayShared(false);
    };

    const displayBarBtn = () => {
        setDisplaySushi(false);
        setDisplayPizza(false);
        setDisplaySalate(false);
        setDisplayBar(true);
        setDisplayComments(false);
        setDisplayShared(false);
    };

    const displayCommentsBtn = () => {
        setDisplaySushi(false);
        setDisplayPizza(false);
        setDisplaySalate(false);
        setDisplayBar(false);
        setDisplayComments(true);
        setDisplayShared(false);
    };

    const displaySharedBtn = () => {
        setDisplaySushi(false);
        setDisplayPizza(false);
        setDisplaySalate(false);
        setDisplayBar(false);
        setDisplayComments(false);
        setDisplayShared(true);
    };

    return (
        <div className="admin">
            {displaySingIn && (
                <div className="admin-login">
                    <h1>Вхід</h1>
                    <input
                        type="text"
                        style={{
                            boxShadow: `0 0 5px 1px ${loginBorder}`,
                            border: `1px solid ${loginBorder}`,
                        }}
                        placeholder="Login"
                        onChange={loginHandleChange}
                        onKeyUp={validKeyLogin}
                    />
                    <input
                        type="password"
                        style={{
                            boxShadow: `0 0 5px 1px ${passwordBorder}`,
                            border: `1px solid ${passwordBorder}`,
                        }}
                        placeholder="Password"
                        onChange={passwordHandleChange}
                        onKeyUp={validKeyPassword}
                    />
                    <br />
                    <button onClick={singInBtn}>Увійти</button>
                </div>
            )}
            {displaySetting && (
                <div className="admin-setting">
                    <div className="admin-setting-position">
                        <div
                            className="admin-setting-position-item"
                            onClick={displaySushiBtn}
                        >
                            <img src="https://panda-sushi.com.ua/img/main-panda-sushi.png"/>
                            <h3>Суші</h3>
                        </div>
                        <div
                            className="admin-setting-position-item"
                            onClick={displayPizzaBtn}
                        >
                            <img src="https://panda-sushi.com.ua/img/main-panda-pizza.png"/>
                            <h3>Піца</h3>
                        </div>
                        <div
                            className="admin-setting-position-item"
                            onClick={displaySalateBtn}
                        >
                            <img src="https://panda-sushi.com.ua/img/main-panda-salad.png"/>
                            <h3>Салати</h3>
                        </div>
                        <div
                            className="admin-setting-position-item"
                            onClick={displayBarBtn}
                        >
                            <img src="https://panda-sushi.com.ua/img/main-panda-bar.png"/>
                            <h3>Напої</h3>
                        </div>
                        <div
                            className="admin-setting-position-item"
                            onClick={displayCommentsBtn}
                        >
                            <img src="https://st2.depositphotos.com/2081021/5642/v/950/depositphotos_56420481-stock-illustration-panda-sushi.jpg"/>
                            <h3>Відгуки</h3>
                        </div>
                        <div
                            className="admin-setting-position-item"
                            onClick={displaySharedBtn}
                        >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROt8dKV2HcPqaEXWxaSBKPZhAnXrNHluLc2w&usqp=CAU"/>
                            <h3>Акції</h3>
                        </div>
                    </div>
                    <div className="admin-setting-GetAndDelete">
                        {displaySushi && <DisplaySushi />}
                        {displayPizza && <DisplayPizza />}
                        {displaySalate && <DisplaySalate />}
                        {displayBar && <DisplayBar />}
                        {displayComments && <DisplayComments />}
                        {displayShared && <DisplayShared />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
