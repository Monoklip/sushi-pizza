import { SetStateAction, useState } from 'react';
import './admin.scss';
import DisplayBar from './DisplayBar/DisplayBar';
import DisplayComments from './DisplayComments/DisplayComments';
import DisplayPizza from './DisplayPizza/DisplayPizza';
import DisplaySalate from './DisplaySalate/DisplaySalate';
import DisplayShared from './DisplayShared/DisplayShared';
import DisplaySushi from './DisplaySushi/DisplaySushi';

const Admin = () => {

    const [login, seLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [displaySingIn, setDisplaySingIn] = useState<boolean>(true);
    const [displaySetting, setDisplaySetting] = useState<boolean>(false);

    const [displaySushi, setDisplaySushi] = useState<boolean>(false);
    const [displayPizza, setDisplayPizza] = useState<boolean>(false);
    const [displaySalate, setDisplaySalate] = useState<boolean>(false);
    const [displayBar, setDisplayBar] = useState<boolean>(false);
    const [displayComments, setDisplayComments] = useState<boolean>(false);
    const [displayShared, setDisplayShared] = useState<boolean>(false);

    const loginHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        seLogin(event.target.value);
    };

    const passwordHandleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    };

    const singInBtn = () => {
        if(login === 'admin' && password === 'admin'){
            setDisplaySingIn(false);
            setDisplaySetting(true);
        }
        else{
            alert('Постороннім вхід заборонено');
        }
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

    return(
        <div className='admin'>
            {displaySingIn &&
                <div className="admin-login">
                    <h1>Вхід</h1>
                    <input type="text" placeholder='Login' onChange={loginHandleChange}/>
                    <input type="text" placeholder='Password' onChange={passwordHandleChange}/><br />
                    <button onClick={singInBtn}>Увійти</button>
                </div>
            }
            {displaySetting &&
                <div className="admin-setting">
                    <div className="admin-setting-position">
                        <div className="admin-setting-position-item" onClick={displaySushiBtn}>
                            <img src="https://panda-sushi.com.ua/img/main-panda-sushi.png" alt="" />
                            <h3>Суші</h3>
                        </div>
                        <div className="admin-setting-position-item" onClick={displayPizzaBtn}>
                            <img src="https://panda-sushi.com.ua/img/main-panda-pizza.png" alt="" />
                            <h3>Піца</h3>
                        </div>
                        <div className="admin-setting-position-item" onClick={displaySalateBtn}>
                            <img src="https://panda-sushi.com.ua/img/main-panda-salad.png" alt="" />
                            <h3>Салати</h3>
                        </div>
                        <div className="admin-setting-position-item" onClick={displayBarBtn}>
                            <img src="https://panda-sushi.com.ua/img/main-panda-bar.png" alt="" />
                            <h3>Напої</h3>
                        </div>
                        <div className="admin-setting-position-item" onClick={displayCommentsBtn}>
                            <img src="https://st2.depositphotos.com/2081021/5642/v/950/depositphotos_56420481-stock-illustration-panda-sushi.jpg" alt="" />
                            <h3>Відгуки</h3>
                        </div>
                        <div className="admin-setting-position-item" onClick={displaySharedBtn}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROt8dKV2HcPqaEXWxaSBKPZhAnXrNHluLc2w&usqp=CAU" alt="" />
                            <h3>Акції</h3>
                        </div>
                    </div>
                    <div className="admin-setting-GetAndDelete">
                        {displaySushi && <DisplaySushi />}
                        {displayPizza && <DisplayPizza/>}
                        {displaySalate && <DisplaySalate/>}
                        {displayBar && <DisplayBar/>}
                        {displayComments && <DisplayComments/>}
                        {displayShared && <DisplayShared/>}
                    </div>
                </div>
            }
        </div>
    )
};

export default Admin;