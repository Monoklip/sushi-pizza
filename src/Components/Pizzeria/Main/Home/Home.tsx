import { Link } from 'react-router-dom';
import About from '../About/About';
import IconMenu from '../IconMenu/IconMenu';
import './home.scss';

const Home =() =>{ 

    return(
        <div className='home'>
            <IconMenu/>
            <Link to={'/shared'}>
                <img src="https://panda-pizza.com.ua/uploads/pages/main/15813196673+1%20v1-01-01-01.jpg" />
            </Link>
            <div className="home-item">
                <div className="home-item-box">
                    <img src="https://panda-pizza.com.ua/uploads/pages/main/1537515757adv-item1.png" />
                    <p>Акції</p>
                </div>
                <div className="home-item-box">
                    <img src="https://panda-pizza.com.ua/uploads/pages/main/1537515757adv-item2.png" />
                    <p>Оплата картою</p>
                </div>
                <div className="home-item-box">
                    <img src="https://panda-pizza.com.ua/uploads/pages/main/1537515757adv-item3.png" />
                    <p> Страви в подарунок</p>
                </div>
                <div className="home-item-box">
                    <img src="https://panda-pizza.com.ua/uploads/pages/main/1537515757adv-item4.png" />
                    <p>Кур’єри на авто</p>
                </div>
                <div className="home-item-box">
                    <img src="https://panda-pizza.com.ua/uploads/pages/main/1537515757adv-item5.png" />
                    <p> Безкоштовні додатки</p>
                </div>
            </div>
            <About/>
        </div>
    )
};

export default Home;