const ChatMessage = (props) => {
    if(props.type === "bot"){
        return(
            <div className="bot-chat chat-message">
                <div className="message">{props.message}</div>
            </div>
        )
    }
    else if (props.type === "user"){
        return(
            <div className="user-chat chat-message">
                <div className="message">{props.message}</div>
            </div>
        )
    }
}

export default ChatMessage