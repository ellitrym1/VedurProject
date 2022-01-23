import './App.css';
import Logo from './components/Logo.jsx'
import Description from "./components/Description.jsx"
import Chat from "./components/Chat"
import React from "react"
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      altView: false
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView(){
    this.setState({
      altView: !this.state.altView
    })
  }

  render(){
    if(!this.state.altView){
      return(
        <div className="App">
          <div className="homeView">
            <Logo />
            <Description />
            <button className="ttm-btn" onClick={this.changeView}>Talk to me</button>
          </div>
        </div>
      )  
    }
    else{
      return(
        <div className="App">
          <div className="altView">
            <div className="altView-gc1 av-grid">
              <Logo />
              <Description />
              <button className="gb-btn" onClick={this.changeView}>Go back</button>
            </div>
            <Chat />
          </div>
        </div>
      )
    }
  }
}

export default App;
