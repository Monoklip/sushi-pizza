import { SetStateAction, useEffect, useState } from "react";
import "./admin.scss";
import { validName, validPassword, validLogin } from "../../../Regexp/Regexp";
import DisplayBar from "./DisplayBar/DisplayBar";
import DisplayComments from "./DisplayComments/DisplayComments";
import DisplayPizza from "./DisplayPizza/DisplayPizza";
import DisplaySalate from "./DisplaySalate/DisplaySalate";
import DisplayShared from "./DisplayShared/DisplayShared";
import DisplaySushi from "./DisplaySushi/DisplaySushi";

const Admin = (props: { setDisplayUser: any; }) => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>('');

    const [errorText, setErrorText] = useState<string>("");

    const [displaySingIn, setDisplaySingIn] = useState<boolean>(true);
    const [displaySingUp, setDisplaySingUp] = useState<boolean>(false);
    const [displaySetting, setDisplaySetting] = useState<boolean>(false);
    const [displayUserAccount, setDisplayUserAccount] = useState<boolean>(false);

    const [displaySushi, setDisplaySushi] = useState<boolean>(false);
    const [displayPizza, setDisplayPizza] = useState<boolean>(false);
    const [displaySalate, setDisplaySalate] = useState<boolean>(false);
    const [displayBar, setDisplayBar] = useState<boolean>(false);
    const [displayComments, setDisplayComments] = useState<boolean>(false);
    const [displayShared, setDisplayShared] = useState<boolean>(false);

    const [loginBorder, setLoginBorder] = useState<string>("rgb(16, 98, 192)");
    const [passwordBorder, setPasswordBorder] = useState<string>("rgb(16, 98, 192)");
    const [nameBorder, setNameBorder] = useState<string>("rgb(16, 98, 192)");

    const [url, setUrl] = useState<string>("http://localhost:3000/accounts");
    const [dataAcc, setDataAcc] = useState([]);

    const userAccFromLocalStorage = JSON.parse(localStorage.getItem('User') as string) || Number;

    const getAccFromLocalStorage = async() => {
        const response = await fetch(url);
        const acc = await response.json();

        acc.some((elem: { login: string; name: string; }) => {
            if(elem.login === userAccFromLocalStorage.login){
                setDisplaySingIn(false);
                setDisplaySingUp(false);
                setDisplaySetting(false);
                setDisplayUserAccount(true);
                setName(elem.name);
                props.setDisplayUser(true);
            }
            else if(userAccFromLocalStorage.login === 'admin'){
                setDisplaySingIn(false);
                setDisplaySingUp(false);
                setDisplaySetting(true);
                setDisplayUserAccount(false);
                props.setDisplayUser(false);
            }
        })
    };

    useEffect(()=>{
        getAccFromLocalStorage();
    },[]);

    const exitUserFromLocalStorage = () => {
        localStorage.removeItem('User');

        setDisplaySingIn(true);
        setDisplaySingUp(false);
        setDisplaySetting(false);
        setDisplayUserAccount(false);
        setErrorText('');
        props.setDisplayUser(false);
    };
    
    const loginHandleChange = (event: {target: { value: SetStateAction<string> };}) => {
        setLogin(event.target.value);
    };

    const passwordHandleChange = (event: {target: { value: SetStateAction<string> };}) => {
        setPassword(event.target.value);
    };

    const nameHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setName(event.target.value);
    };

    const nameValid = () => {
        if(validName.test(name)){
            setNameBorder('green');
        }
        else if(name === ''){
            setNameBorder('rgb(16, 98, 192)');
        }
        else{
            setNameBorder('red');
        }
    };

    const loginValid = () => {
        if(validLogin.test(login)){
            setLoginBorder('green');
        }
        else if(login === ''){
            setLoginBorder('rgb(16, 98, 192)');
        }
        else{
            setLoginBorder('red');
        }
    };

    const passwordValid = () => {
        if(validPassword.test(password)){
            setPasswordBorder('green');
        }
        else if(password === ''){
            setPasswordBorder('rgb(16, 98, 192)');
        }
        else{
            setPasswordBorder('red');
        }
    };

    const singInDisplayBtn = () => {
        setDisplaySingIn(true);
        setDisplaySingUp(false);
    };

    const singUpBtn = () => {
        setDisplaySingIn(false);
        setDisplaySingUp(true);
        setErrorText('');

        setName('');
        setLogin('');
        setPassword('');
    };

    const singInBtn = async() => {
        const response = await fetch(url);
        const datas = await response.json();
        setDataAcc(datas);

        datas.filter((elem: { login: string; password: string; name: string; }) => {
            if(login === elem.login && password === elem.password){
                setDisplayUserAccount(true);
                setDisplaySingIn(false);
                setDisplaySingUp(false);
                setDisplaySetting(false);
                setName(elem.name);

                localStorage.setItem('User', JSON.stringify(elem));
                props.setDisplayUser(true);
            }
            else if (login === "admin" && password === "admin") {
                setDisplaySingIn(false);
                setDisplaySetting(true);

                localStorage.setItem('User', JSON.stringify({login: 'admin', password: 'admin'}));
            }
            else if(login === '' && password === ''){
                setErrorText('Заповніть всі поля');
            }
            else {
                setErrorText("Постороннім вхід заборонено");
            }
        });
    };

    const registrAccount = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataAcc(data);

        setLoginBorder('green');
        setPasswordBorder('green');
        setNameBorder('green');

        const filter = data.some((elem: { login: string; }) => elem.login === login);

        if(filter === false && login !== 'admin' && login.trim() !== '' && password.trim() !== '' && name.trim() !== ''){
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    login: login,
                    password: password,
                    name: name
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            singInDisplayBtn();
            setErrorText('Аккаунт успішно зареєстровано');
        }
        else if(filter === false){
            if(login === ''){
                setLoginBorder('red');
            }
            if(password === ''){
                setPasswordBorder('red');
            }
            if(name === ''){
                setNameBorder('red');
            }
        }
        else if(filter === true){
            setErrorText('Такий логін уже використовується');
            setLoginBorder('red');
        };
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
                        placeholder="Введіть логін"
                        onChange={loginHandleChange}
                    />
                    <input
                        type="password"
                        style={{
                            boxShadow: `0 0 5px 1px ${passwordBorder}`,
                            border: `1px solid ${passwordBorder}`,
                        }}
                        placeholder="Введіть пароль"
                        onChange={passwordHandleChange}
                    />
                    <div className="admin-login-errorText">{errorText}</div>
                    <button className="admin-login_buttonSingIn" onClick={singInBtn}>Увійти</button><br />
                    <button className="admin-login_buttonSingUp" onClick={singUpBtn}>Реєстрація</button>
                </div>
            )}
            {displaySingUp &&
                <div className="admin-login">
                <h1>Вхід</h1>
                <input
                    type="text"
                    style={{
                        boxShadow: `0 0 5px 1px ${nameBorder}`,
                        border: `1px solid ${nameBorder}`,
                    }}
                    placeholder="Введіть Ім'я"
                    onChange={nameHandleChange}
                    onKeyUp={nameValid}
                />
                <input
                    type="text"
                    style={{
                        boxShadow: `0 0 5px 1px ${loginBorder}`,
                        border: `1px solid ${loginBorder}`,
                    }}
                    placeholder="Введіть логін"
                    onChange={loginHandleChange}
                    onKeyUp={loginValid}
                />
                <input
                    type="password"
                    style={{
                        boxShadow: `0 0 5px 1px ${passwordBorder}`,
                        border: `1px solid ${passwordBorder}`,
                    }}
                    placeholder="Введіть пароль"
                    onChange={passwordHandleChange}
                    onKeyUp={passwordValid}
                />
                <div className="admin-login-errorText">{errorText}</div>
                <button className="admin-login_buttonSingIn" onClick={registrAccount}>Реєстрація</button><br />
                <button className="admin-login_buttonSingUp" onClick={singInDisplayBtn}>Вхід</button>
            </div>
            }
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
                        <button onClick={exitUserFromLocalStorage}>Вийти</button>
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
            {displayUserAccount && (
                <div className="account">
                    <div className="account-userName">
                        <h1>Привіт {name}</h1>
                        <button onClick={exitUserFromLocalStorage}>Вийти</button>
                    </div>
                    <div className="account-info">
                        <h2>Дякуємо що обрали Нас, ми віримо що наша продукція та її вишуканий смак Вас не підведуть.</h2>
                        <h2>І в якості вдячності за довіру Ви отримуєте знижку <span>-10%</span></h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;