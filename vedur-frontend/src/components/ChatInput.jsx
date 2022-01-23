const ChatInput = (props) => {
    function handleSubmit(e){
        e.preventDefault()
        props.getWeatherData(e)
    }
    return(
        <form data-testid="inputForm" onSubmit={handleSubmit}>
            <input disabled={true} className="chat-input" id="ChatInput" name="textInput" placeholder="Type here..." type="text" autoComplete="off" />
        </form>
    )
}

export default ChatInput