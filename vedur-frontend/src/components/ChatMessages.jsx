import React from "react"
import ChatMessage from "./ChatMessage";
import WeatherCard from "./WeatherCard";
import Apparel from "./Apparel"

class ChatMessages extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            messages: [
                {
                    "type": "bot",
                    "message": "Hi!"
                },
                {
                    "type": "bot",
                    "message": "My name is Vedur!"
                },
                {
                    "type": "button",
                    "message": "Weather"
                }
            ]
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleWeatherData(data){
        let chatInput = document.querySelector("#ChatInput")
        console.log(this.state.messages[7])
        if(this.state.messages[7].message === "Trip"){
            chatInput.setAttribute("disabled", true)
        }
        chatInput.value = ""
        if(data){
            this.setState({
                messages: [...this.state.messages, {
                    "type": "bot",
                    "message": <WeatherCard data={data} />
                },
                {
                    "type": "bot",
                    "message": <Apparel temp={data.current.temp_c} condition={data.current.condition.text} />
                }]
            })
        }
        else{
            this.setState({
                messages: [...this.state.messages, {
                    "type": "bot",
                    "message": "Error! Invalid location"
                }]
            })
        }

        let chatMessages = document.querySelector("#chat-messages")
        // chatMessages.scrollTop = chatMessages.scrollHeight
        chatMessages.scrollTo(0, chatMessages.scrollHeight)
    }

    handleButtonClick(e){
        console.log(e)
        e.target.disabled = true
        if(e.target.value === "Weather"){
            this.setState({
                messages: [...this.state.messages, 
                    {
                        "type": "user",
                        "message": "Weather"
                    },
                    {
                        "type": "bot",
                        "message": "Trip or Destination?"
                    },
                    {
                        "type": "button",
                        "message": "Trip"
                    },
                    {
                        "type": "button",
                        "message": "Destination"
                    }
                ]
            })
            
        }
        else if (e.target.value === "Trip"){
            document.querySelector("#Destination").setAttribute("disabled", true)
            document.querySelector("#ChatInput").removeAttribute("disabled")
            this.setState({
                messages: [...this.state.messages,
                    {
                        "type": "user",
                        "message": "Trip"
                    },
                    {
                        "type": "bot",
                        "message": "Enter the name of the city"
                    }
                ]
            })
        }
        else if (e.target.value === "Destination"){
            document.querySelector("#Trip").setAttribute("disabled", true)
            document.querySelector("#ChatInput").removeAttribute("disabled")
            this.setState({
                messages: [...this.state.messages,
                    {
                        "type": "user",
                        "message": "Destination"
                    },
                    {
                        "type": "bot",
                        "message": "Enter the name of the city"
                    }
                ]
            })
        }
    }

    render(){
        const chatMessages = this.state.messages.map((message, key) => {         
            if(message.type === "button"){
                return(
                    <button key={key} className="chat-btn" id={message.message} onClick={this.handleButtonClick} value={message.message}>{message.message}</button>
                )
            }
            else{
                return(
                    <ChatMessage key={key} type={message.type} message={message.message} />
                )
            }
        })
        return(
            <div className="chat-messages" id="chat-messages">
                {chatMessages}
            </div>
        )
    }
}

export default ChatMessages