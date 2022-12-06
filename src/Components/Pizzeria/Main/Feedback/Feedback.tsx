import { SetStateAction, useEffect, useState } from 'react';
import './feedback.scss';
import FeedbackItem from './FeedbackItem/FeedbackItem';

const Feedback = () => {

    const [urlReviews, setUrlReviews] = useState('http://localhost:3000/reviews');
    const [reviews, setReviews] = useState([]);

    const[urlGoodCheck, setUrlGoodCheck] = useState('http://localhost:3000/good-check');
    const[dataGoodCheck, setDataGoodCheck] = useState([]);

    const[urlBadCheck, setUrlBadCheck] = useState('http://localhost:3000/bad-check');
    const[dataBadCheck, setDataBadCheck] = useState([]);

    const [numberFeedback, setNumberFeedback] = useState(0);
    const [numPositiv, setNumPositiv] = useState(0);
    const [numNegativ, setNumNegativ] = useState(0);

    const [nameUser, setNameUser] = useState('');
    const [numberUser, setNumberUser] = useState('');
    const [phoneUser, setPhoneUser] = useState('');
    const [messageUser, setMessageUser] = useState('');

    const [goodCheck, setGoodCheck] = useState(false);
    const [badCheck, setBadCheck] = useState(false);

    const goodCheckHandleCheck = () => {
        setGoodCheck(!goodCheck);
        setBadCheck(false);
    };

    const badCheckHandleCheck = () => {
        setBadCheck(!badCheck);
        setGoodCheck(false);
    };

    const nameUserHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNameUser(event.target.value);
    };

    const numberUserHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNumberUser(event.target.value);
    };

    const phoneUserHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPhoneUser(event.target.value);
    };

    const messageUserHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setMessageUser(event.target.value);
    };

    const feedbackBtn = async() => {
        const response = await fetch(urlReviews);
        const reviews = await response.json();
        setReviews(reviews);
        setNumberFeedback(reviews.length);        
    };

    const feedbackGoodCheck = async() => {
        const response = await fetch(urlGoodCheck);
        const reviews = await response.json();
        setDataGoodCheck(reviews)
    };

    const feedbackBadCheck = async() => {
        const response = await fetch(urlBadCheck);
        const reviews = await response.json();
        setDataBadCheck(reviews);
    };

    useEffect(()=>{
        feedbackBtn();
        feedbackGoodCheck();
        feedbackBadCheck();
        setNumPositiv(dataGoodCheck.length);
        setNumNegativ(dataBadCheck.length);
    },[reviews]);


    const checkReviews = () => {
        if(goodCheck === true){
            return 'good';
        }
        else if(badCheck === true){
            return 'bad';
        }
        else{
            return 'none';
        }
    }

    const createBtn = async() => {
        if(nameUser.trim() !== '' && numberUser.trim() !== '' && phoneUser.trim() !== '' && messageUser.trim() !== ''){
            const response = await fetch(urlReviews, {
                method: "POST",
                body: JSON.stringify({
                    name: nameUser,
                    phone: phoneUser,
                    number: numberUser,
                    text: messageUser,
                    check: checkReviews()
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if(badCheck === true){
                const response = await fetch(urlBadCheck, {
                    method: "POST",
                    body: JSON.stringify({
                        name: "badcheck"
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }); 
            }
            else{
                const response = await fetch(urlGoodCheck, {
                    method: "POST",
                    body: JSON.stringify({
                        name: "goodCheck"
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }); 
            };
        }
        else{
            alert('Заповніть всі поля');
        };
    };

    return(
        <div className='feedback'>
            <div className="feedback-numbers">
                <div className="feedback-numbers-all">
                    <p>ВСЬОГО ОТРИМАЛИ ВІД ВАС</p>
                    <p><span style={{fontWeight: 'bold'}}>{numberFeedback}</span> ВІДГУКІВ</p>
                </div>
                <div className="feedback-numbers-null"></div>
                <div className="feedback-numbers-interest">
                    <p>ЗАДОВОЛЕНІ КЛІЄНТИ <span style={{color: 'green'}}>{numPositiv}</span></p>
                    <p>Є НАД ЧИМ ПОПРАЦЮВАТИ <span style={{color: 'red'}}>{numNegativ}</span></p>
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
                        <textarea placeholder='Повідомлення' onChange={messageUserHandleChange}></textarea>
                    </div>
                    <div className="feedback-reviews-write-data">
                        <input type="text" placeholder='Номер замовлення' onChange={numberUserHandleChange}/>
                        <input type="text" placeholder="Ваше Ім'я" onChange={nameUserHandleChange}/>
                        <input type="text" placeholder='Телефон' onChange={phoneUserHandleChange}/>
                        <div className="feedback-reviews-write-data-checkbox">
                            <input type="checkbox" checked={goodCheck} onChange={goodCheckHandleCheck}/>Все супер
                            <input type="checkbox" checked={badCheck} onChange={badCheckHandleCheck}/>Не задоволений
                        </div>
                    </div>
                </div>
                <div className="feedback-reviews-btn">
                    <button onClick={createBtn}>Відправити</button>
                </div>
            </div>
            <div className="feedback-comments">
                {reviews.map((elem: { name: string; text: string; check: string; id:number }) => {
                    return <FeedbackItem 
                    elem={elem} 
                    key={elem.id}
                    numPositiv={numPositiv}
                    setNumPositiv={setNumPositiv}/>
                })}
            </div>
        </div>
    )
};

export default Feedback;