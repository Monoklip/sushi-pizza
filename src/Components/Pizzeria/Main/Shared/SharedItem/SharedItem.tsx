import './sharedItem.scss';

const SharedItem = (props: { elem: { image: string; name: string; info: string; }; }) => {
    return(
        <div className='sharedItem'>
            <div className="sharedItem-photo">
                <img src={`${props.elem.image}`} alt="" />
            </div>
            <div className="sharedItem-info">
                <h2>{props.elem.name}</h2>
                <p>{props.elem.info}</p>
            </div>
        </div>
    )
};

export default SharedItem;