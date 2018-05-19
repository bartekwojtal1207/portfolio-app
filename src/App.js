import React, { Component } from 'react';
import './App.css';
import Button from './partials/Button';
import Header from './partials/header/Header';
import Particles from 'react-particles-js';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          messageText: 'bartosz wojtal.developer.make/awsome',
          left: -1000,
          hover: false,
          visibleBtn: false,
          visibleApp: true
      };
  }

  componentDidMount() {
      this.timerID = setInterval(() => this.setPositionText(),
          10);
      this.timerID = setInterval(() => this.showBtn(),
          10300);
  }

  showBtn() {
      this.setState({ visibleBtn: true })
  }

  setPositionText() {
      let left = this.state.left;
      left ++;
      this.state.left < 0 ? this.setState({ left: left }) : false;
  }

  lightMessageHandler = () => {
      this.setState({ hover: true })
  };

  lightOffMessageHandler = () => {
      this.setState({ hover: false })
  };

  changeView = () => {
      this.state.visibleApp ?  this.setState({ visibleApp: false }) : this.setState({ visibleApp: true })
  };



  render() {
    const leftPosition = this.state.left;

    return (
      <div className="App" style={this.state.visibleApp ? {display: "block"} : {display: "none"}}>
          <div id={"particles"}>
              <Particles> </Particles>
          </div>
          <Header />

          <div id="message-container">
              <div className="welcome-container">
                  <h3 style={{left: leftPosition, position: "relative"}} className={this.state.hover ? "js-show-text-hover" : "js-show-text"} id="msg">{this.state.messageText}</h3>
              </div>
              <Button changeView={this.changeView} onMouseEnter={this.lightMessageHandler} onMouseLeave={this.lightOffMessageHandler} style={this.state.visibleBtn ? {display: "block"} : {display: "none"}} >zapraszam</Button>
          </div>
      </div>
    );
  }
}

export default App;
