import React, { Component } from 'react';
import '../App.css'

const button = (props) => {
    return (
        <div className="welcome-container">
            <a className="welcome-button" href={props.link} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} style={props.style}>{props.children}</a>
        </div>
    )
};

export default button;