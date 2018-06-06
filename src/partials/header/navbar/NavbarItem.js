import React, { Component } from 'react';
import '../../../App.css'

const navbarItems = (props) => {
    return (
        <li key={props.index} onClick={props.click}  className={'text-center'}>
            <a href="#">{props.children}</a>
            <ul style={{display: props.visibleSubCategory}} key={props.index}>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </li>
    )
};




export default navbarItems;