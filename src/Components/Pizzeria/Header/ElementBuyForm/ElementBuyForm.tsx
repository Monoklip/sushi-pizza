import { SetStateAction, useState } from "react";
import "./element-buy-form.scss";

const ElementBuyForm = (props: { btnBuyEnd: () => void }) => {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [number, setNumber] = useState<number>(0);
    const [entrance, setEntrance] = useState<number>(0);
    const [storey, setStorey] = useState<number>(0);
    const [apartment, setApartment] = useState<number>(0);

    const nameHandleChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setName(event.target.value);
    };

    const phoneHandleChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setPhone(event.target.value as unknown as number);
    };

    const emailHandleChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setEmail(event.target.value);
    };

    const streetHandleChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setStreet(event.target.value);
    };

    const numberHandleChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setNumber(event.target.value as unknown as number);
    };

    const entranceHandleChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setEntrance(event.target.value as unknown as number);
    };

    const storeyHandleChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setStorey(event.target.value as unknown as number);
    };

    const apartmentHandleChange = (event: {
        target: { value: SetStateAction<string> };
    }) => {
        setApartment(event.target.value as unknown as number);
    };

    const buyFoodBtn = () => {
        if (
            name.trim() !== "" &&
            phone !== 0 &&
            street.trim() !== "" &&
            number !== 0 &&
            apartment !== 0
        ) {
            props.btnBuyEnd();
            alert(
                `${name}, ваш заказ по адресу ${street}-${number}, квартира-${apartment} прийнято`
            );
        } else {
            alert("Заповніть всі обовязкові поля");
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Ваше ім'я*"
                onChange={nameHandleChange}
            />
            <input
                type="text"
                placeholder="Номер телефону*"
                onChange={phoneHandleChange}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={emailHandleChange}
            />
            <div className="header-info-right-info-basket-buy-street">
                <input
                    type="text"
                    placeholder="Вулиця*"
                    onChange={streetHandleChange}
                />
                <input
                    type="text"
                    placeholder="№*"
                    onChange={numberHandleChange}
                />
            </div>
            <div className="header-info-right-info-basket-buy-house">
                <input
                    type="text"
                    placeholder="Під'їзд"
                    onChange={entranceHandleChange}
                />
                <input
                    type="text"
                    placeholder="Поверх"
                    onChange={storeyHandleChange}
                />
                <input
                    type="text"
                    placeholder="Кв.*"
                    onChange={apartmentHandleChange}
                />
            </div>
            <h4>Оберіть спосіб оплати</h4>
            <button
                className="header-info-right-info-basket-buy-btn"
                onClick={buyFoodBtn}
            >
                Оформити заказ
            </button>
        </>
    );
};

export default ElementBuyForm;