import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot }from 'radium';
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
          visibleApp: true,
          visibleNavBar: false
      };
  }

  componentDidMount() {
      this.timerID = setInterval(() => this.setPositionText(),
          10);

  }
  
  showNavBar() {
      const test = this.state.visibleNavBar;
      this.setState({ visibleNavBar: !test })
  }

  setPositionText() {
      //@TODO przerobic raczej nc css
      let left = this.state.left;
      left ++;
      this.state.left < 0 ? this.setState({ left: left }) : false;
      this.state.left === 0 ? this.setState({ visibleBtn: true }) : this.setState({ visibleBtn: false })
  }

  lightMessageHandler = () => {
      this.setState({ hover: true })
  };

  lightOffMessageHandler = () => {
      this.setState({ hover: false })
  };

  render() {
    const leftPosition = this.state.left,
        classes = [];

    if (this.state.hover) {
        classes.push('js-show-text-hover')
    }else {
        classes.push('js-show-text')
    }

    let button = null,
        header = null;

    if( this.state.visibleBtn) {
        button = (
            <Button click={() => this.showNavBar()} onMouseEnter={this.lightMessageHandler} onMouseLeave={this.lightOffMessageHandler} style={this.state.visibleBtn ? {display: "block"} : {display: "none"}} >zapraszam</Button>
        )
    }

    if (this.state.visibleNavBar) {
        header = (
            <Header />
        )
    }

    return (
        <StyleRoot>
          <div className="App" style={this.state.visibleApp ? {display: "block"} : {display: "none"}}>
              {/*<div id={"particles"}>*/}
                  {/*<Particles> </Particles>*/}
              {/*</div>*/}
              <header>
                  {header}
               </header>

              <div id="message-container">
                  <div className="welcome-container">
                      <h3 style={{left: leftPosition, position: "relative"}} className={classes} id="msg">{this.state.messageText}</h3>
                  </div>
                  {button}
              </div>
          </div>
        </StyleRoot>
    );
  }
}

export default Radium(App);
