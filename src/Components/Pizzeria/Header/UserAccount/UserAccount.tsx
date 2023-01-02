import './user-account.scss';

const UserAccount = (props: {
    dataAcc: {
        login: string;
        password: string;
        name: string;
    };
}) => {
    return(
        <div className="user-account">
            <h4>Привіт {props.dataAcc.name}, раді що ви з нами.</h4>
            <h4>Для Вас діє знижка у розмірі -10%</h4>
        </div>
    )
};

export default UserAccount;