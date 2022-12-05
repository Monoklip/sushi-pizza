import './display-comments-item.scss';

const DisplayCommentsItem = (props: { elem: { name: any; phone: any; number: any; text: any; check: any; id: any; }; }) => {

    const {
        name,
        phone,
        number,
        text,
        check,
        id
    } = props.elem;

    return(
        <div className='displayCommentsItem'>
            {props.elem.check === 'good' &&
                <>
                    <div className="displayCommentsItem-image">
                        <img src="https://panda-sushi.com.ua/uploads/pages/reviews/1537447494pandas_07.gif" alt="" />
                    </div>
                    <div className="displayCommentsItem-user">
                        <div className="displayCommentsItem-user-name" style={{fontWeight: 'bold', color: `green`}}>{name}, <span style={{color: 'grey'}}>Телефон: {phone} , Нормер замовлення:{number}</span></div>
                        <div className="displayCommentsItem-user-comment">{text}</div>
                    </div>
                </>
            }
             {props.elem.check === 'bad' &&
                <>
                    <div className="displayCommentsItem-image">
                        <img src="https://panda-sushi.com.ua/uploads/pages/reviews/1537447494pandas_01.jpg" alt="" />
                    </div>
                    <div className="displayCommentsItem-user">
                        <div className="displayCommentsItem-user-name" style={{fontWeight: 'bold', color: `red`}}>{name}, <span style={{color: 'grey'}}>Телефон: {phone} , Нормер замовлення:{number}</span></div>
                        <div className="displayCommentsItem-user-comment">{text}</div>
                    </div>
                </>
            }
             {props.elem.check === 'none' &&
                <>
                    <div className="displayCommentsItem-image">
                        <img src="https://panda-sushi.com.ua/uploads/pages/reviews/1537447494pandas_02.gif" alt="" />
                    </div>
                    <div className="displayCommentsItem-user">
                        <div className="displayCommentsItem-user-name" style={{fontWeight: 'bold', color: `blue`}}>{name}, <span style={{color: 'grey'}}>Телефон: {phone} , Нормер замовлення:{number}</span></div>
                        <div className="displayCommentsItem-user-comment">{text}</div>
                    </div>
                </>
            }
        </div>
    )
};

export default DisplayCommentsItem;