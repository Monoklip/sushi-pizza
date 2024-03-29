import { useState } from 'react';
import './about.scss';

const About = () => {

    const [questionBtn1, setQuestionBtn1] = useState(false);
    const [questionBtn2, setQuestionBtn2] = useState(false);
    const [questionBtn3, setQuestionBtn3] = useState(false);
    const [questionBtn4, setQuestionBtn4] = useState(false);

    const btnQuestionClick1 = () => {
        setQuestionBtn1(!questionBtn1);
    };

    const btnQuestionClick2 = () => {
        setQuestionBtn2(!questionBtn2);
    };

    const btnQuestionClick3 = () => {
        setQuestionBtn3(!questionBtn3);
    };

    const btnQuestionClick4 = () => {
        setQuestionBtn4(!questionBtn4);
    };
    
    return(
        <div>
            <div className="home-info">
                <h2>Панда Піца - онлайн-ресторан - безкоштовної доставки піци Львів!</h2>
                <p>Доставка Панда Піца Львів 
                    <span> 
                        - це команда ентузіастів смачної та якісної кухні, яка Вас ніколи не підведе. Кожного дня ми готуємо сотні апетитних та смачних піц та швиденько доставляємо їх прямісінько до Вас по всьому Львову.
                    </span>
                </p>
                <span>
                    Ми любимо Львів! Ми любимо свою справу! Ми любимо своїх клієнтів!  - тому готуємо тільки найсмачніші піци з найякісніших інгредієнтів.  
                </span>
                <p>Якість та Швидкість! 
                    <span>
                        - це два основних пріоритети в роботі команди Панда Піца Львів. 
                        В першу чергу звичайно ж Якість. Всі піци ми готуємо виключно після отримання Вашого замовлення.  А сучасні технології та відповідальне навчання працівників дозволяють нам швидко доставляти якісні страви.  Піца одразу після печі , без ніяких затримок, відправляється прямісінько до Вас. 
                    </span>
                </p>
                <span>
                    Унікальні страви! Хочемо звернути Вашу увагу на страви в розробку яких ми вклали душу та пишаємося результатом:
                </span>
                <ul>
                    <li>
                        <p>Піца Delux 
                            <span>- піца із сиром в бортиках. Сир Мармуровий чи Сир Базиліко? - Обираєте Ви!</span>
                        </p>
                        <span>
                            Піца Delux - це розробка 2018 року. Ідея прийшла зненацька, від су-шефа однієї з наших кухонь. Попробувавши цю піцу, багато працівників сказали, що нічого подібного вони ще не коштували і це однозначно найкраща піца в їхньому житі. Саме тому ми вирішили прикласти максимум зусиль, щоб якнайшвидше її реалізувати. Але швидко не вийшло. Весь процес зайняв близько 2 місяців. Тішило лише те, що за 2 місяці експерементів піца стала ще смачнішою. Адже паралельно з розробкою Піци Delux, ми розробили нове тісто, яким ми досі пишаємося і рекомендує всім нашим друзям.
                        </span>
                        <br />
                        <span>
                            P.S. Ідея загортати Сир в Бортики не є новою і походить з Англії. Але у Львові Панда Піца є першими, хто впровадив її в життя.
                        </span>
                    </li>
                    <li>
                        <p>Black Pizza 
                            <span>
                                - це піца приготовлена на чорному тісті. Чорний колір йому надає природній барвник - Чорнило Каракатиці.
                                Black Pizza -це розробка 2017 року. І знову ж таки, Панда Піца є першими, хто почав робити таку піцу. На відміну від піци Delux, найбільше часу зайняла не сама розробка, а пошук ключового інгредієнта - Чорнила Каракатиці. Адже виявилося, що ресторанний сектор в переважній більшості використовує Активоване вугілля, як барвник чорного кольору, а Чорнило Каракатиці доставляється ексклюзивно під замовлення. Піца доставляється виключно в чорній коробці та досі користується високим попитом. Характерний смак самого чорнила можна відчути скуштувавши піцу. 
                            </span>
                        </p>
                    </li>
                </ul>
                <h2> 🍕 Доставка Панда Піца Львів 🍕</h2>
                <p>⭐ Панда Швидкий! 
                    <span>
                        В нас три кухні в різних куточках Львова, тому Ми доставляємо справді швидко, як і обіцяємо. 
                    </span>
                </p>
                <p>⭐ Панда Педантичний! 
                    <span> 
                        Тому Ви отримаєте суші або піцу безкоштовно (на Ваш вибір) в разі запізнення кур'єра навіть на 1 хвилинку. Деталі тут https://panda-sushi.com.ua/delivery
                    </span>
                </p>
                <p>⭐ Панда фанат Якості! 
                    <span>
                        Тому Ви можете бути впевненими, що  інгредієнти  у Вашій піці є найвищої якості. А якість виконання самих піц була тричі перевірена, перед відправленням Вам.
                    </span>
                </p>
                <span>
                    Замовляючи у Панда Піца Львів, Ви завжди можете розраховувати на  гарний настрій друзів,  усмішку коханої та повагу колег за вдало організований вечір. Ми сумлінно працюємо над підтриманням та покращенням високого рівня якості нашого сервісу доставки піци, і саме тому:
                </span>
                <ul>
                    <li>
                        <span>
                            Постійні клієнти оцінили наші старання та сміливо рекомендують нас друзям, адже 
                                <span style={{fontWeight: 'bold'}}>31.5%</span> 
                                нових клієнтів замовляють по 
                                <span style={{fontWeight: 'bold'}}>рекомендації друзів.</span>
                        </span>
                    </li>
                    <li>
                        <span>Близько 
                            <span style={{fontWeight: 'bold'}}>
                                62% клієнтів зробили повторне замовлення 
                            </span>протягом 1-го місяця після свого 1-го замовлення.
                        </span>
                    </li>
                </ul>
                <div className="home-info-question">
                    <h2>Часто задавані питання про Доставку СУШІ у Львові:</h2>
                    <p>💰 Доставка БЕЗКОШТОВНА?</p>
                    <button 
                        className='home-info-btn' 
                        onClick={btnQuestionClick1}>
                        ВІДПОВІДЬ
                    </button>
                    <br />
                    {questionBtn1 &&
                        <span>
                            Доставка є Безкоштовною. Мінімальна сума доставки складає 150 або 200 грн, в залежності від адреси доставки.
                        </span>
                    }
                    <p>💳 Оплата картою можлива?</p>
                    <button 
                        className='home-info-btn' 
                        onClick={btnQuestionClick2}>
                            ВІДПОВІДЬ
                    </button>
                    <br />
                    {questionBtn2 &&
                        <span>
                            Так! Ви можете розрахуватися картою на сайті, або при отримані замовлення.
                        </span>
                    }
                    <p>🍣 Скільки чекати доставку?</p>
                    <button 
                        className='home-info-btn' 
                        onClick={btnQuestionClick3}>
                            ВІДПОВІДЬ
                    </button>
                    <br />
                    {questionBtn3 &&
                        <span>
                            90% замовлень доставляють до 59 хв. Час доставки залежить від віддаленості кухні.
                        </span>
                    }
                    <p>⏱ Який у вас графік роботи?</p>
                    <button 
                        className='home-info-btn' 
                        onClick={btnQuestionClick4}>
                            ВІДПОВІДЬ
                    </button>
                    <br />
                    {questionBtn4 && 
                        <span>
                            Ми працюємо з 10:00 ранку до 22:00 (на час дії комендантської години).
                        </span>
                    }
                </div>
                <h2>Дякуємо, що Ви з нами!</h2>
            </div>
        </div>
    )
};

export default About;