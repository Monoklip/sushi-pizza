import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-tabs">
                <div className="footer-tabs-a">
                    <Link to={"/"}>Головна</Link>
                </div>
                <div className="footer-tabs-a">
                    <Link to={"/"}>Контакти</Link>
                </div>
                <div className="footer-tabs-a">
                    <Link to={"/"}>Даставка</Link>
                </div>
                <div className="footer-tabs-a">
                    <Link to={"/feedback"}>Відгуки</Link>
                </div>
                <div className="footer-tabs-a">
                    <Link to={"/shared"}>Акції</Link>
                </div>
                <div className="footer-tabs-a">
                    <Link to={"/vacancies"}>Вакансії</Link>
                </div>
                <div className="footer-tabs-a">
                    <Link to={"/about"}>Про нас</Link>
                </div>
            </div>
            <div className="footer-link">
                <div className="footer-link-internet">
                    <a href="">
                        <img src="https://cdn-icons-png.flaticon.com/512/1051/1051258.png"/>
                    </a>
                </div>
                <div className="footer-link-internet">
                    <a href="">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;