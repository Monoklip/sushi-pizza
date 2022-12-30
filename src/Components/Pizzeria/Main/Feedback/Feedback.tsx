import { SetStateAction, useEffect, useState } from "react";
import {
    validName,
    validNumber,
    validPhone,
    validMessage,
} from "../../../Regexp/Regexp";
import "./feedback.scss";
import FeedbackItem from "./FeedbackItem/FeedbackItem";

const Feedback = () => {
    const [urlReviews, setUrlReviews] = useState<string>("http://localhost:3000/reviews");
    const [reviews, setReviews] = useState([]);

    const [urlGoodCheck, setUrlGoodCheck] = useState<string>("http://localhost:3000/good-check");
    const [dataGoodCheck, setDataGoodCheck] = useState([]);

    const [urlBadCheck, setUrlBadCheck] = useState<string>("http://localhost:3000/bad-check");
    const [dataBadCheck, setDataBadCheck] = useState([]);

    const [numberFeedback, setNumberFeedback] = useState<number>(0);
    const [numPositiv, setNumPositiv] = useState<number>(0);
    const [numNegativ, setNumNegativ] = useState<number>(0);

    const [nameUser, setNameUser] = useState<string>("");
    const [numberUser, setNumberUser] = useState<string>("");
    const [phoneUser, setPhoneUser] = useState<string>("");
    const [messageUser, setMessageUser] = useState<string>("");

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

    const goodCheckHandleCheck = () => {
        setGoodCheck(!goodCheck);
        setBadCheck(false);
    };

    const badCheckHandleCheck = () => {
        setBadCheck(!badCheck);
        setGoodCheck(false);
    };

    const nameUserHandleChange = (event: {target: { value: SetStateAction<string> };}) => {
        setNameUser(event.target.value);
        setNameUserValue(event.target.value);
    };

    const numberUserHandleChange = (event: {target: { value: SetStateAction<string> };}) => {
        setNumberUser(event.target.value);
        setNumberUserValue(event.target.value);
    };

    const phoneUserHandleChange = (event: {target: { value: SetStateAction<string> };}) => {
        setPhoneUser(event.target.value);
        setPhoneUserValue(event.target.value);
    };

    const messageUserHandleChange = (event: {target: { value: SetStateAction<string> };}) => {
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
        setNumPositiv(dataGoodCheck.length);
        setNumNegativ(dataBadCheck.length);
    }, [reviews]);

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
            validName.test(nameUser) &&
            validNumber.test(numberUser) &&
            validPhone.test(phoneUser) &&
            validMessage.test(messageUser)
        ) {
            const response = await fetch(urlReviews, {
                method: "POST",
                body: JSON.stringify({
                    name: nameUser,
                    phone: phoneUser,
                    number: numberUser,
                    text: messageUser,
                    check: checkReviews(),
                }),
                headers: {
                    "Content-Type": "application/json",
                },
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
        } else {
            alert("Невірно заповнені поля");
        }
    };

    const validBtnName = () => {
        if (validName.test(nameUser)) {
            setValidBorderName("green");
        } else if (nameUser === "") {
            setValidBorderName("black");
        } else {
            setValidBorderName("red");
        }
    };

    const validBtnNumber = () => {
        if (validNumber.test(numberUser)) {
            setValidBorderNumber("green");
        } else if (numberUser === "") {
            setValidBorderNumber("black");
        } else {
            setValidBorderNumber("red");
        }
    };

    const validBtnPhone = () => {
        if (validPhone.test(phoneUser)) {
            setValidBorderPhone("green");
        } else if (phoneUser === "") {
            setValidBorderPhone("black");
        } else {
            setValidBorderPhone("red");
        }
    };

    const validBtnMessage = () => {
        if (validMessage.test(messageUser)) {
            setValidBorderMessage("green");
        } else if (messageUser === "") {
            setValidBorderMessage("black");
        } else {
            setValidBorderMessage("red");
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
                        <span style={{ color: "green" }}>{numPositiv}</span>
                    </p>
                    <p>
                        Є НАД ЧИМ ПОПРАЦЮВАТИ{" "}
                        <span style={{ color: "red" }}>{numNegativ}</span>
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
                        <input
                            type="text"
                            style={{ borderColor: `${validBorderName}` }}
                            placeholder="Ваше Ім'я"
                            onChange={nameUserHandleChange}
                            onKeyUp={validBtnName}
                            value={nameUserValue}
                        />
                        <input
                            type="text"
                            style={{ borderColor: `${validBorderPhone}` }}
                            placeholder="Телефон"
                            onChange={phoneUserHandleChange}
                            onKeyUp={validBtnPhone}
                            value={phoneUserValue}
                        />
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
                {reviews.map(
                    (elem: {
                        name: string;
                        text: string;
                        check: string;
                        id: number;
                    }) => {
                        return (
                            <FeedbackItem
                                elem={elem}
                                key={elem.id}
                                numPositiv={numPositiv}
                                setNumPositiv={setNumPositiv}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};

export default Feedback;