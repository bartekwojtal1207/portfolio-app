import React, { Component } from 'react';
import '../../../App.css'

const navbarItems = (props) => {
    return (
        <li key={props.index} className={'text-center'}><a href="#">{props.children}</a></li>
    )
};




export default navbarItems;