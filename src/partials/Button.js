import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import '../App.css'

const button = (props) => {
    return (
        <StyleRoot>
        <div className="welcome-container">
            <a className="welcome-button" onClick={props.click} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} style={props.style}>{props.children}</a>
        </div>
        </StyleRoot>
    )
};

export default Radium(button);