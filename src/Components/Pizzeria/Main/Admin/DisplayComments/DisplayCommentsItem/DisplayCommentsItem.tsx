import './display-comments-item.scss';

const DisplayCommentsItem = (props: { elem: { name: string; phone: number; number: number; text: string; check: string; id: number; }; }) => {

    const {
        name,
        phone,
        number,
        text,
        check
    } = props.elem;

    return(
        <div className='displayCommentsItem'>
            {check === 'good' &&
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
             {check === 'bad' &&
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
             {check === 'none' &&
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