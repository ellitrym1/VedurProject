import React from "react"

import ChatMessages from "./ChatMessages"
import ChatInput from "./ChatInput"
const axios = require("axios")

class Chat extends React.Component{
  constructor(props){
    super(props)
    this.child = React.createRef()
  }

  getWeatherData = (e) => {
    // console.log(e)
    let location = e.target[0].value
    let data = {}
    axios.get(`https://api.weatherapi.com/v1/current.json?key=6d05147638f940f4a1c193240212102&q=${location}`)
      .then(res => {
        data = res.data
        this.child.current.handleWeatherData(data)
      })
      .catch(err => {
        data = null
        this.child.current.handleWeatherData(data)
        console.log(err)
      })
    
  } 

  render(){
    return(
      <div data-testid="chatBox" className="chat-box av-grid">
        <ChatMessages ref={this.child} />
        <ChatInput getWeatherData={this.getWeatherData}/>
      </div>
    )
  }
}

export default Chat;