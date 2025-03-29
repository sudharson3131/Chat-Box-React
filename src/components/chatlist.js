

function ChatList(props) {
    return (
            <div className="listOne">
                <div className="profileImage">
                    <img src={props.image} alt="man1" />
                </div>
                <div className="listContent">
                    <h2>{props.myname}</h2>
                    <p>{props.desc}</p>
                </div>
                <div className="listInfo">
                    <p>{props.time}</p>
                    <p className="star">&#9733;</p> 
                </div>
                
            </div>
    );
}


export default ChatList;
