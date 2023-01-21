import './feedbackItem.scss';

const FeedbackItem = (props: { elem: { check: string; name: string; text: string; date: string }; }) => {

    return(
        <div className='feedbackItem'>
            {props.elem.check === 'good' &&
                <>
                    <div className="feedbackItem-image">
                        <img src="https://panda-sushi.com.ua/uploads/pages/reviews/1537447494pandas_07.gif" alt="" />
                    </div>
                    <div className="feedbackItem-user">
                        <div className="feedbackItem-user-name" style={{fontWeight: 'bold', color: `green`}}>
                            <h3>{props.elem.name}</h3>
                            <h4>{props.elem.date}</h4>
                        </div>
                        <div className="feedbackItem-user-comment">
                            <p>{props.elem.text}</p>
                        </div>
                    </div>
                </>
            }
             {props.elem.check === 'bad' &&
                <>
                    <div className="feedbackItem-image">
                        <img src="https://panda-sushi.com.ua/uploads/pages/reviews/1537447494pandas_01.jpg" alt="" />
                    </div>
                    <div className="feedbackItem-user">
                        <div className="feedbackItem-user-name" style={{fontWeight: 'bold', color: `red`}}>
                            <h3>{props.elem.name}</h3>
                            <h4>{props.elem.date}</h4>
                        </div>
                        <div className="feedbackItem-user-comment">
                            <p>{props.elem.text}</p>
                        </div>
                    </div>
                </>
            }
             {props.elem.check === 'none' &&
                <>
                    <div className="feedbackItem-image">
                        <img src="https://panda-sushi.com.ua/uploads/pages/reviews/1537447494pandas_02.gif" alt="" />
                    </div>
                    <div className="feedbackItem-user">
                        <div className="feedbackItem-user-name" style={{fontWeight: 'bold', color: `rgb(60, 118, 243)`}}>
                            <h3>{props.elem.name}</h3>
                            <h4>{props.elem.date}</h4>
                        </div>
                        <div className="feedbackItem-user-comment">
                            <p>{props.elem.text}</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
};

export default FeedbackItem;