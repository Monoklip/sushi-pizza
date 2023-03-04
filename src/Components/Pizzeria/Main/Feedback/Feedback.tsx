import { SetStateAction, useEffect, useState } from "react";
import { validFeedbackName, validFeedbackNumber, validFeedbackPhone, validFeedbackMessage } from "../../../Regexp/Regexp";
import "./feedback.scss";
import FeedbackItem from "./FeedbackItem/FeedbackItem";

const Feedback = () => {
    const [urlReviews, setUrlReviews] = useState<string>("http://localhost:3000/reviews");
    const [reviews, setReviews] = useState<any>([]);

    const [urlGoodCheck, setUrlGoodCheck] = useState<string>("http://localhost:3000/good-check");
    const [dataGoodCheck, setDataGoodCheck] = useState<any>([]);

    const [urlBadCheck, setUrlBadCheck] = useState<string>("http://localhost:3000/bad-check");
    const [dataBadCheck, setDataBadCheck] = useState<any>([]);

    const [numberFeedback, setNumberFeedback] = useState<number>(0);

    const [nameUser, setNameUser] = useState<string>("");
    const [numberUser, setNumberUser] = useState<string>("");
    const [phoneUser, setPhoneUser] = useState<string>("");
    const [messageUser, setMessageUser] = useState<string>("");
    const [dateUser, setDateUser] = useState<string>(
        new Date().getHours() + ':' +
        new Date().getMinutes() + '  ' +
        new Date().getDate() + '-' +
        new Date().getMonth() + 1 + '-' +
        new Date().getFullYear()
    );

    const [nameUserValue, setNameUserValue] = useState<string>("");
    const [numberUserValue, setNumberUserValue] = useState<string>("");
    const [phoneUserValue, setPhoneUserValue] = useState<string>("");
    const [messageUserValue, setMessageUserValue] = useState<string>("");

    const [goodCheck, setGoodCheck] = useState<boolean>(false);
    const [badCheck, setBadCheck] = useState<boolean>(false);

    const [validBorderName, setValidBorderName] = useState<string>("black");
    const [validBorderNumber, setValidBorderNumber] = useState<string>("black");
    const [validBorderPhone, setValidBorderPhone] = useState<string>("black");
    const [validBorderMessage, setValidBorderMessage] = useState<string>("black");

    const [validTextErrorName, setValidTextErrorName] = useState<string>("");
    const [validTextErrorNumber, setValidTextErrorNumber] = useState<string>("");
    const [validTextErrorPhone, setValidTextErrorPhone] = useState<string>("");
    const [validTextErrorMessage, setValidTextErrorMessage] = useState<string>("");

    const goodCheckHandleCheck = () => {
        setGoodCheck(!goodCheck);
        setBadCheck(false);
    };

    const badCheckHandleCheck = () => {
        setBadCheck(!badCheck);
        setGoodCheck(false);
    };

    const nameUserHandleChange = (event: { target: { value: SetStateAction<string> }; }) => {
        setNameUser(event.target.value);
        setNameUserValue(event.target.value);
    };

    const numberUserHandleChange = (event: { target: { value: SetStateAction<string> }; }) => {
        setNumberUser(event.target.value);
        setNumberUserValue(event.target.value);
    };

    const phoneUserHandleChange = (event: { target: { value: SetStateAction<string> }; }) => {
        setPhoneUser(event.target.value);
        setPhoneUserValue(event.target.value);
    };

    const messageUserHandleChange = (event: { target: { value: SetStateAction<string> }; }) => {
        setMessageUser(event.target.value);
        setMessageUserValue(event.target.value);
    };

    const feedbackBtn = async () => {
        const response = await fetch(urlReviews);
        const reviews = await response.json();
        setReviews(reviews);
        setNumberFeedback(reviews.length);
    };

    const feedbackGoodCheck = async () => {
        const response = await fetch(urlGoodCheck);
        const reviews = await response.json();
        setDataGoodCheck(reviews);
    };

    const feedbackBadCheck = async () => {
        const response = await fetch(urlBadCheck);
        const reviews = await response.json();
        setDataBadCheck(reviews);
    };

    useEffect(() => {
        feedbackBtn();
        feedbackGoodCheck();
        feedbackBadCheck();

        // setReviews(reviews.sort((next: { id: number; }, prev: { id: number; }) => prev.id - next.id));
    }, []);

    const checkReviews = () => {
        if (goodCheck === true) {
            return "good";
        } else if (badCheck === true) {
            return "bad";
        } else {
            return "none";
        }
    };

    const createBtn = async () => {
        if (
            validFeedbackName.test(nameUser) &&
            validFeedbackNumber.test(numberUser) &&
            validFeedbackPhone.test(phoneUser) &&
            validFeedbackMessage.test(messageUser)
        ) {
            const response = await fetch(urlReviews, {
                method: "POST",
                body: JSON.stringify({
                    name: nameUser,
                    phone: phoneUser,
                    number: numberUser,
                    text: messageUser,
                    check: checkReviews(),
                    date: dateUser
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            }).finally(() => {
                feedbackBtn();
                feedbackGoodCheck();
                feedbackBadCheck();
            });

            setNameUserValue("");
            setNameUser("");

            setNumberUserValue("");
            setNumberUser("");

            setPhoneUserValue("");
            setPhoneUser("");

            setMessageUserValue("");
            setMessageUser("");

            if (badCheck === true) {
                const response = await fetch(urlBadCheck, {
                    method: "POST",
                    body: JSON.stringify({
                        name: "badcheck",
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            } else {
                const response = await fetch(urlGoodCheck, {
                    method: "POST",
                    body: JSON.stringify({
                        name: "goodCheck",
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            }

            setValidBorderMessage("black");
            setValidBorderName("black");
            setValidBorderNumber("black");
            setValidBorderPhone("black");
        }
        else {
            if (nameUser === '') {
                setValidTextErrorName('Заповніть це поле');
                setValidBorderName('red');
            }
            if (!validFeedbackNumber.test(numberUser)) {
                setValidTextErrorNumber('Заповніть це поле');
                setValidBorderNumber('red');
            }
            else {
                setValidTextErrorNumber('');
                setValidBorderNumber('green');
            }
            if (!validFeedbackPhone.test(phoneUser)) {
                setValidTextErrorPhone('Заповніть це поле');
                setValidBorderPhone('red');
            }
            else {
                setValidTextErrorPhone('');
                setValidBorderPhone('green');
            }
            if (!validFeedbackMessage.test(messageUser)) {
                setValidTextErrorMessage('Заповніть це поле');
                setValidBorderMessage('red');
            }
            else {
                setValidTextErrorMessage('');
                setValidBorderMessage('green');
            }
        }
    };

    const validBtnName = () => {
        if (validFeedbackName.test(nameUser)) {
            setValidBorderName("green");
            setValidTextErrorName('');
        } else if (nameUser === "") {
            setValidBorderName("black");
            setValidTextErrorName('Заповніть це поля');
        } else {
            setValidBorderName("red");
            setValidTextErrorName('Неправильно заповненне поле');
        }
    };

    const validBtnNumber = () => {
        if (validFeedbackNumber.test(numberUser)) {
            setValidBorderNumber("green");
            setValidTextErrorNumber('');
        } else if (numberUser === "") {
            setValidBorderNumber("black");
            setValidTextErrorNumber('Заповніть це поля');
        } else {
            setValidBorderNumber("red");
            setValidTextErrorNumber('Неправильно заповненне поле');
        }
    };

    const validBtnPhone = () => {
        if (validFeedbackPhone.test(phoneUser)) {
            setValidBorderPhone("green");
            setValidTextErrorPhone('');
        } else if (phoneUser === "") {
            setValidBorderPhone("black");
            setValidTextErrorPhone('Заповніть це поля');
        } else {
            setValidBorderPhone("red");
            setValidTextErrorPhone('Неправильно заповненне поле');
        }
    };

    const validBtnMessage = () => {
        if (validFeedbackMessage.test(messageUser)) {
            setValidBorderMessage("green");
            setValidTextErrorMessage('');
        } else if (messageUser === "") {
            setValidBorderMessage("black");
            setValidTextErrorMessage('Заповніть це поля');
        } else {
            setValidBorderMessage("red");
            setValidTextErrorMessage('Неправильно заповненне поле');
        }
    };

    return (
        <div className="feedback">
            <div className="feedback-numbers">
                <div className="feedback-numbers-all">
                    <p>ВСЬОГО ОТРИМАЛИ ВІД ВАС</p>
                    <p>
                        <span style={{ fontWeight: "bold" }}>
                            {numberFeedback}
                        </span>{" "}
                        ВІДГУКІВ
                    </p>
                </div>
                <div className="feedback-numbers-null"></div>
                <div className="feedback-numbers-interest">
                    <p>
                        ЗАДОВОЛЕНІ КЛІЄНТИ{" "}
                        <span style={{ color: "green" }}>{dataGoodCheck.length}</span>
                    </p>
                    <p>
                        Є НАД ЧИМ ПОПРАЦЮВАТИ{" "}
                        <span style={{ color: "red" }}>{dataBadCheck.length}</span>
                    </p>
                </div>
            </div>
            <div className="feedback-text">
                <p>Друзі!</p>
                <p>Нам дуже важлива Ваша думка про нас і нашу продукцію!</p>
                <p>Всі свої зауваження, побажання і враження Ви можете залишити тут - ми</p>
                <p>постараємося їх врахувати, щоб Ви були задоволені!</p>
                <p>Всі спірні випадки ми стараємося вирішувати в користь наших клієнтів.</p>
                <p>Запевняємо, що ні одне із Ваших побажань не залишиться без уваги.</p>
                <p>Пишіть свої побажання, пропозиції, ідеї. Ми постараємося відповісти і втілити в життя найцікавіші ідеї.</p>
            </div>
            <div className="feedback-reviews">
                <h1>Залишити відгук</h1>
                <div className="feedback-reviews-write">
                    <div className="feedback-reviews-write-text">
                        <textarea
                            style={{ borderColor: `${validBorderMessage}` }}
                            placeholder="Повідомлення"
                            onChange={messageUserHandleChange}
                            onKeyUp={validBtnMessage}
                            value={messageUserValue}
                        ></textarea>
                        <div className="feedback-reviews-write-data-textError">{validTextErrorMessage}</div>
                    </div>
                    <div className="feedback-reviews-write-data">
                        <input
                            type="text"
                            style={{ borderColor: `${validBorderNumber}` }}
                            placeholder="Номер замовлення"
                            onChange={numberUserHandleChange}
                            onKeyUp={validBtnNumber}
                            value={numberUserValue}
                        />
                        <div className="feedback-reviews-write-data-textError">{validTextErrorNumber}</div>
                        <input
                            type="text"
                            style={{ borderColor: `${validBorderName}` }}
                            placeholder="Ваше Ім'я"
                            onChange={nameUserHandleChange}
                            onKeyUp={validBtnName}
                            value={nameUserValue}
                        />
                        <div className="feedback-reviews-write-data-textError">{validTextErrorName}</div>
                        <input
                            type="text"
                            style={{ borderColor: `${validBorderPhone}` }}
                            placeholder="Телефон"
                            onChange={phoneUserHandleChange}
                            onKeyUp={validBtnPhone}
                            value={phoneUserValue}
                        />
                        <div className="feedback-reviews-write-data-textError">{validTextErrorPhone}</div>
                        <div className="feedback-reviews-write-data-checkbox">
                            <input
                                type="checkbox"
                                checked={goodCheck}
                                onChange={goodCheckHandleCheck}
                            />
                            Все супер
                            <input
                                type="checkbox"
                                checked={badCheck}
                                onChange={badCheckHandleCheck}
                            />
                            Не задоволений
                        </div>
                    </div>
                </div>
                <div className="feedback-reviews-btn">
                    <button onClick={createBtn}>Відправити</button>
                </div>
            </div>
            <div className="feedback-comments">
                {reviews.sort((next: { id: number; }, prev: { id: number; }) => prev.id - next.id).map(
                    (elem: {
                        name: string;
                        text: string;
                        check: string;
                        id: number;
                        date: string
                    }) => {
                        return (
                            <FeedbackItem
                                elem={elem}
                                key={elem.id}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default Feedback;