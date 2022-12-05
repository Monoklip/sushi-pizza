import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ElementBuyForm from './ElementBuyForm/ElementBuyForm';
import ElementFromLocalStorage from './ElementFromLocalStorage/ElementFromLocalStorage';
import './header.scss';

const Header = (props: { food: any; setFood: any; }) => {

    const {
        setFood,
        food
    } = props;

    const [buyDispay, setBuyDispay] = useState<boolean>(false);
    const [buyDispayNone, setBuyDispayNone] = useState<boolean>(false);
    const [buyDispayNext, setBuyDispayNext] = useState<boolean>(false);
    const [buyDisplayEnd, setBuyDisplayEnd] = useState<boolean>(false);

    const [position, setPosition] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);

    // const [food, setFood] = useState (JSON.parse(localStorage.getItem('Food') as string) || []);

    useEffect(()=>{
        setPosition(food.length);
        // setFood(JSON.parse(localStorage.getItem('Food') as string) || []);

        for(let i = 0; i < food.length; i++){
            setPrice(price + food[i].sum);
        };

        if(food.length && price < 150){
            setBuyDispayNone(true);
            setBuyDispayNext(false);
        }
        else if(food.length && price >= 150){
            setBuyDispayNone(false);
            setBuyDispayNext(true);
        }
        else{
            setBuyDispayNone(true);
            setBuyDispayNext(false);
        }
    },[food.length]);

    const btnBuy = () => {
        setBuyDispay(!buyDispay);

        if(food.length && price < 150){
            setBuyDispayNone(true);
            setBuyDispayNext(false);
            setBuyDisplayEnd(false)
        }
        else if(food.length && price >= 150){
            setBuyDispayNone(false);
            setBuyDispayNext(true);
            setBuyDisplayEnd(false);
        }
        else{
            setBuyDispayNone(true);
            setBuyDispayNext(false);
            setBuyDisplayEnd(false);
        }
    };

    const btnBuyNone = () => {
        setBuyDispay(false);
    };

    const btnBuyNext = () => {
        setBuyDispayNone(false);
        setBuyDisplayEnd(true);
        setBuyDispayNext(false);
    };

    const btnBuyEnd = () => {
        setBuyDispayNext(true);
        setBuyDisplayEnd(false);
        setBuyDispay(false);
    }

    return(
        <div className='header'>
            <div className="header-lviv">
                <Link to={'/admin'}>
                    <img src="https://panda-pizza.com.ua/img/desk-logo.png" alt="" />
                </Link>
            </div>
            <div className="header-info">
                <div className="header-info-internet">
                    <div className="header-info-internet-link">
                        <a href="">
                            <div className="header-info-internet-link-image">
                                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051258.png" alt="" />
                            </div>
                        </a>
                        <a href="">
                            <div className="header-info-internet-link-image">
                                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" />
                            </div>
                        </a>
                    </div>
                    <div className="header-info-internet-time">
                        <h4>ПРАЦЮЄМО: з 9:00 до 22:00</h4>
                    </div>
                </div>
                <div className="header-info-pages">
                    <Link to={'/delivery'}>ДОСТАВКА</Link>
                    <Link to={'/about'}>ПРО НАС</Link>
                    <Link to={'/shared'}>АКЦІЇ</Link>
                    <Link to={'/contacts'}>КОНТАКТИ</Link>
                </div>
            </div>
            <div className="header-logo">
                <Link to={'/'}>
                    <img src="https://panda-pizza.com.ua/uploads/settings/oF2IN53NtZ8JMeUpTOPNiHChF98tgUyHoHWUyelt.png" alt="" />
                </Link>
            </div>
            <div className="header-info-right">
                <div className="header-info-right-number">
                    <div className="header-info-right-number-street">
                        <h6>Сихівська</h6>
                        <h6>Варшавська</h6>
                        <h6>Садова</h6>
                    </div>
                    <div className="header-info-right-number-phone">
                        <h1>+38(063)272-45-16</h1>
                    </div>
                </div>
                <div className="header-info-right-info">
                    <div className="header-info-right-info-vacancy">
                        <Link to={'/feedback'}>ВІДГУКИ</Link>
                        <Link to={'/vacancies'}>ВАКАНСІЇ</Link>
                    </div>
                    <div className="header-info-right-info-basket">
                        <a className='header-info-right-info-basket-btn' onClick={btnBuy}>
                            <img src="https://panda-pizza.com.ua/img/desk-basket-img.png" alt="" />
                            <span className='header-info-right-info-basket-btn-span'>{position}</span>
                            <span className='header-info-right-info-basket-btn-span'>позицій -</span>
                            <span>{price}</span>
                            <span>грн</span>
                            <img src="https://panda-pizza.com.ua/img/arrow-down.png" alt="" />
                        </a>
                        {buyDispay &&
                            <>
                                {buyDispayNone && 
                                    <div className="header-info-right-info-basket-buy">
                                        <p style={{color:'grey'}}>Сума до оплати:
                                            <span style={{color: 'black'}}> {price} грн</span>
                                        </p >
                                        <p style={{color: 'red'}}>Мінімальна сума замовлення:</p>
                                        <p>150 грн</p>
                                        <button className='header-info-right-info-basket-buy-btn' onClick={btnBuyNone}>Дозамовити страви</button>
                                    </div>
                                }
                                {buyDispayNext && 
                                    <div className="header-info-right-info-basket-buy">
                                        {food.map((elem: { name: string; price: number; image: string; gramm: number; num: number; id: number; sum: number}) => {
                                            return <ElementFromLocalStorage elem={elem} key={elem.name} 
                                            setFood={setFood}
                                            food={food}
                                            />
                                        })}
                                        <p style={{color:'grey'}}>Сума до оплати:
                                            <span style={{color: 'black'}}> {price} грн</span>
                                        </p >
                                    <button className='header-info-right-info-basket-buy-btn' onClick={btnBuyNext}>Продовжити</button>
                                </div>
                                }
                                {buyDisplayEnd &&
                                    <div className="header-info-right-info-basket-buy">
                                        <ElementBuyForm btnBuyEnd={btnBuyEnd}/>
                                        <p style={{color:'grey'}}>Сума до оплати:
                                            <span style={{color: 'black'}}> {price} грн</span>
                                        </p >
                                        <p style={{color: 'red'}}>Доставка безкоштовно</p>
                                    </div>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;