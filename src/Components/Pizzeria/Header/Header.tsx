import { SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ElementBuyForm from "./ElementBuyForm/ElementBuyForm";
import ElementFromLocalStorage from "./ElementFromLocalStorage/ElementFromLocalStorage";
import "./header.scss";
import UserAccount from "./UserAccount/UserAccount";

const Header = (props: { food: any; setFood: any; suma: any; setSuma: any; }) => {
    const { setFood, food, suma, setSuma } = props;

    const [buyDisplay, setBuyDisplay] = useState<boolean>(false);
    const [buyDisplayNone, setBuyDisplayNone] = useState<boolean>(false);
    const [buyDisplayNext, setBuyDisplayNext] = useState<boolean>(false);
    const [buyDisplayEnd, setBuyDisplayEnd] = useState<boolean>(false);

    const [position, setPosition] = useState<number>(0);
    const [price, setPrice] = useState<number>(suma);
    const [discount, setDiscount] = useState<number>(0);
    const [newSuma, setNewSuma] = useState<number>(suma-discount);

    const [phoneStreet, setPhoneStreet] = useState<string>("+38(063)604-42-93");

    const [colorStreet1, setColorStreet1] = useState<string>("black");
    const [colorStreet2, setColorStreet2] = useState<string>("white");
    const [colorStreet3, setColorStreet3] = useState<string>("white");

    const [displayStreet, setDisplayStreet] = useState<boolean>(true);
    const [displaySingIn, setDisplaySingIn] = useState<boolean>(false);
    const [displaySingUp, setDisplaySingUp] = useState<boolean>(false);
    const [displayUser, setDisplayUser] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [singInBorderError, setSingInBorderError] = useState<string>('black');
    const [singUpBorderError, setSingUpBorderError] = useState<string>('black');

    const [url, setUrl] = useState<string>("http://localhost:3000/accounts");
    const [dataAcc, setDataAcc] = useState([]);

    const [linkDisplayUser, setLinkDisplayUser] = useState<boolean>(true);
    const [linkDisplayAdmin, setLinkDisplayAdmin] = useState<boolean>(false);

    useEffect(() => {
        setPosition(food.length);

        localStorage.setItem('Suma', JSON.stringify(suma));

        setSuma(JSON.parse(localStorage.getItem('Suma') as string) || Number);
        
        if (food.length && suma < 150) {
            setBuyDisplayNone(true);
            setBuyDisplayNext(false);
        } else if (food.length && suma >= 150) {
            setBuyDisplayNone(false);
            setBuyDisplayNext(true);
        } else {
            setBuyDisplayNone(true);
            setBuyDisplayNext(false);
        };

        setDiscount(suma / 100 * 10);
        setNewSuma(suma - discount);
    }, [food.length]);

    const btnBuy = () => {
        setBuyDisplay(!buyDisplay);

        if (food.length && suma < 150) {
            setBuyDisplayNone(true);
            setBuyDisplayNext(false);
            setBuyDisplayEnd(false);
        } else if (food.length && suma >= 150) {
            setBuyDisplayNone(false);
            setBuyDisplayNext(true);
            setBuyDisplayEnd(false);
        } else {
            setBuyDisplayNone(true);
            setBuyDisplayNext(false);
            setBuyDisplayEnd(false);
        }
    };    

    const btnBuyNone = () => {
        setBuyDisplay(false);
    };

    const btnBuyNext = () => {
        setBuyDisplayNone(false);
        setBuyDisplayEnd(true);
        setBuyDisplayNext(false);
        
        setDiscount(Math.round(suma / 100 * 10));
        setNewSuma(Math.round(suma - discount));
    };

    const btnBuyEnd = () => {
        setBuyDisplayNext(true);
        setBuyDisplayEnd(false);
        setBuyDisplay(false);
    };

    const streetBtnSuhivska = () => {
        setPhoneStreet("+38(063)604-42-93");
        setColorStreet1("black");
        setColorStreet2("white");
        setColorStreet3("white");
    };

    const streetBtnVarshavska = () => {
        setPhoneStreet("+38(063)605-79-85");
        setColorStreet1("white");
        setColorStreet2("black");
        setColorStreet3("white");
    };

    const streetBtnSadova = () => {
        setPhoneStreet("+38(063)272-45-16");
        setColorStreet1("white");
        setColorStreet2("white");
        setColorStreet3("black");
    };

    const loginHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setLogin(event.target.value);
    };

    const passwordHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    };

    const nameHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setName(event.target.value);
    };

    const singInBtn = () => {
        setDisplayStreet(false);
        setDisplaySingIn(true);
        setDisplaySingUp(false);
        setDisplayUser(false);

        setSingInBorderError('black');
        setSingUpBorderError('black');
    };

    const singUpBtn = () => {
        setDisplayStreet(false);
        setDisplaySingIn(false);
        setDisplaySingUp(true);
        setDisplayUser(false);

        setSingInBorderError('black');
        setSingUpBorderError('black');
    };

    const registrAccount = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setDataAcc(data);

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
            alert('Аккаунт успішно зареєстровано');

            setDisplayStreet(false);
            setDisplaySingIn(true);
            setDisplaySingUp(false);
            setDisplayUser(false);
        }
        else{
            // alert('Такий логін уже використовується');
            setSingUpBorderError('red');
        }
    };

    const singInAccount = async() => {
        if(login !== '' && password !== ''){
            const response = await fetch(url);
            const datas = await response.json();
            setDataAcc(datas);

            datas.filter((elem: { login: string; password: string; name: string; }) => {
                if(login === elem.login && password === elem.password){
                    setDisplayStreet(false);
                    setDisplaySingIn(false);
                    setDisplaySingUp(false);
                    setDisplayUser(true);
                    setName(elem.name);
                }
                else{
                    setSingInBorderError('red')
                }
            });
        }
        else{
            alert('Заповніть всі поля');
        }
    };

    const exitAccountBtn = () => {
        setDisplayStreet(true);
        setDisplaySingIn(false);
        setDisplaySingUp(false);
        setDisplayUser(false);
        setLinkDisplayAdmin(false);
        setLinkDisplayUser(true);

        setSingInBorderError('black');
        setSingUpBorderError('black');
    };

    const adminPanel = () => {
        if(login === 'admin' && password === 'admin'){
            setLinkDisplayUser(false);
            setLinkDisplayAdmin(true);
        }
    };

    return (
        <div className="header">
            <div className="header-lviv">
                <Link to={"/admin"}>
                    <img src="https://panda-pizza.com.ua/img/desk-logo.png" />
                </Link>
            </div>
            <div className="header-info">
                <div className="header-info-internet">
                    <div className="header-info-internet-link">
                        <a href="">
                            <div className="header-info-internet-link-image">
                                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051258.png" />
                            </div>
                        </a>
                        <a href="">
                            <div className="header-info-internet-link-image">
                                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" />
                            </div>
                        </a>
                    </div>
                    <div className="header-info-internet-time">
                        <h4>ПРАЦЮЄМО: з 10:00 до 22:00</h4>
                    </div>
                </div>
                <div className="header-info-pages">
                    <Link to={"/delivery"}>ДОСТАВКА</Link>
                    <Link to={"/about"}>ПРО НАС</Link>
                    <Link to={"/shared"}>АКЦІЇ</Link>
                    <Link to={"/contacts"}>КОНТАКТИ</Link>
                </div>
            </div>
            <div className="header-logo">
                <Link to={"/"}>
                    <img src="https://panda-pizza.com.ua/uploads/settings/oF2IN53NtZ8JMeUpTOPNiHChF98tgUyHoHWUyelt.png" />
                    <span>ГОЛОВНА</span>
                </Link>
            </div>
            <div className="header-info-right">
                {displayStreet && (
                    <div className="header-info-right-number">
                        <div className="header-info-right-number-street">
                            <span
                                style={{ color: `${colorStreet1}` }}
                                onClick={streetBtnSuhivska}
                            >
                                Сихівська
                            </span>
                            <br />
                            <span
                                style={{ color: `${colorStreet2}` }}
                                onClick={streetBtnVarshavska}
                            >
                                Варшавська
                            </span>
                            <br />
                            <span
                                style={{ color: `${colorStreet3}` }}
                                onClick={streetBtnSadova}
                            >
                                Садова
                            </span>
                        </div>
                        <div className="header-info-right-number-phone">
                            <h1>{phoneStreet}</h1>
                        </div>
                        <button
                            className="header-info-right-number-singIn"
                            onClick={singInBtn}
                        >
                            Вхід
                        </button>
                    </div>
                )}
                {displaySingIn && (
                    <div className="header-info-right-number">
                        <div className="header-info-right-number-inputs">
                            <input
                                type="text"
                                style={{borderColor: `${singInBorderError}`}}
                                className="header-info-right-number-inputs-input"
                                placeholder="Введіть логін"
                                onChange={loginHandleChange}
                                onKeyUp={adminPanel}
                            />
                            <input
                                type="text"
                                style={{borderColor: `${singInBorderError}`}}
                                className="header-info-right-number-inputs-input"
                                placeholder="Введіть пароль"
                                onChange={passwordHandleChange}
                                onKeyUp={adminPanel}
                            />
                        </div>
                        <div className="header-info-right-number-btns">
                            {linkDisplayUser &&
                                <button className="header-info-right-number-btns-singIn" onClick={singInAccount}>
                                Вхід
                            </button>
                            }
                            {linkDisplayAdmin &&
                                <Link to={'/admin'}>
                                    <button className="header-info-right-number-btns-singIn" onClick={exitAccountBtn}>
                                        Вхід
                                    </button>
                                </Link>
                            }
                            <button className="header-info-right-number-btns-singUp" onClick={singUpBtn}>
                                Зареєструватися
                            </button>
                        </div>
                    </div>
                )}
                {displaySingUp &&
                    <div className="header-info-right-number">
                        <div className="header-info-right-number-inputs">
                            <input
                                type="text"
                                style={{borderColor: `${singUpBorderError}`}}
                                className="header-info-right-number-inputs-input"
                                placeholder="Придумайте логін"
                                onChange={loginHandleChange}
                            />
                            <input
                                type="text"
                                style={{borderColor: `${singUpBorderError}`}}
                                className="header-info-right-number-inputs-input"
                                placeholder="Придумайте пароль"
                                onChange={passwordHandleChange}
                            />
                            <input 
                                type="text"
                                style={{borderColor: `${singUpBorderError}`}}
                                className="header-info-right-number-inputs-input" 
                                placeholder="Вкажіть імя"
                                onChange={nameHandleChange}
                            />
                        </div>
                        <div className="header-info-right-number-btns">
                            <button className="header-info-right-number-btns-singIn" onClick={registrAccount}>
                                Зареєструватися
                            </button>
                            <button className="header-info-right-number-btns-singUp" onClick={singInBtn}>
                                Вхід
                            </button>
                        </div>
                    </div>
                }
                {displayUser &&
                    <div className="header-info-right-number">
                        <UserAccount dataAcc={{
                            login: login,
                            password: password,
                            name: name
                        }}/>
                        <button className="header-info-right-number-btnExit" onClick={exitAccountBtn}>Вихід</button>
                    </div>
                }
                <div className="header-info-right-info">
                    <div className="header-info-right-info-vacancy">
                        <Link to={"/feedback"}>ВІДГУКИ</Link>
                        <Link to={"/vacancies"}>ВАКАНСІЇ</Link>
                    </div>
                    <div className="header-info-right-info-basket">
                        <a
                            className="header-info-right-info-basket-btn"
                            onClick={btnBuy}
                        >
                            <img src="https://panda-pizza.com.ua/img/desk-basket-img.png" />
                            <span className="header-info-right-info-basket-btn-span">
                                {position}
                            </span>
                            <span className="header-info-right-info-basket-btn-span">
                                позицій -
                            </span>
                            <span>{suma}</span>
                            <span>грн</span>
                            <img src="https://panda-pizza.com.ua/img/arrow-down.png" />
                        </a>
                        {buyDisplay && (
                            <>
                                {buyDisplayNone && (
                                    <div className="header-info-right-info-basket-buy">
                                        {food.map(
                                            (elem: {
                                                name: string;
                                                price: number;
                                                image: string;
                                                gramm: number;
                                                num: number;
                                                id: number;
                                                sum: number;
                                            }) => {
                                                return (
                                                    <ElementFromLocalStorage
                                                        elem={elem}
                                                        key={elem.name}
                                                        setFood={setFood}
                                                        food={food}
                                                        setPrice={setPrice}
                                                        price={price}
                                                        suma={props.suma} 
                                                        setSuma={props.setSuma}
                                                    />
                                                );
                                            }
                                        )}
                                        <p style={{ color: "red" }}>
                                            Мінімальна сума замовлення:
                                        </p>
                                        <p>150 грн</p>
                                        <button
                                            className="header-info-right-info-basket-buy-btn"
                                            onClick={btnBuyNone}
                                        >
                                            Дозамовити страви
                                        </button>
                                    </div>
                                )}
                                {buyDisplayNext && (
                                    <div className="header-info-right-info-basket-buy">
                                        {food.map(
                                            (elem: {
                                                name: string;
                                                price: number;
                                                image: string;
                                                gramm: number;
                                                num: number;
                                                id: number;
                                                sum: number;
                                            }) => {
                                                return (
                                                    <ElementFromLocalStorage
                                                        elem={elem}
                                                        key={elem.name}
                                                        setFood={setFood}
                                                        food={food}
                                                        setPrice={setPrice}
                                                        price={price}
                                                        suma={props.suma} 
                                                        setSuma={props.setSuma}
                                                    />
                                                );
                                            }
                                        )}
                                        <p style={{ color: "grey" }}>
                                            Сума до оплати:
                                            <span style={{ color: "black" }}>
                                                {" "}
                                                {suma} грн
                                            </span>
                                        </p>
                                        <button
                                            className="header-info-right-info-basket-buy-btn"
                                            onClick={btnBuyNext}
                                        >
                                            Продовжити
                                        </button>
                                    </div>
                                )}
                                {buyDisplayEnd && (
                                    <div className="header-info-right-info-basket-buy">
                                        <ElementBuyForm btnBuyEnd={btnBuyEnd} />
                                        <p style={{ color: "grey" }}>
                                            Сума до оплати:
                                            <span style={{ color: "grey" }}>
                                                {" "}
                                                {suma} грн
                                            </span>
                                        </p>
                                        {displayUser &&
                                            <>
                                                <p style={{ color: "blue" }}>
                                                    Ваша знижка:
                                                    <span style={{ color: "blue" }}>
                                                        {" "}
                                                        {discount} грн
                                                    </span>                                                
                                                </p>
                                                <p style={{ color: "green" }}>
                                                    До оплати:
                                                    <span style={{ color: "green" }}>
                                                        {" "}
                                                        {newSuma} грн
                                                    </span>                                                
                                                </p>
                                            </>
                                        }
                                        <p style={{ color: "red" }}>
                                            Доставка безкоштовно
                                        </p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;