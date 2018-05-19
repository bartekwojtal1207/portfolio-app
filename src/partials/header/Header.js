import React, { Component } from 'react';

import '../../App.css';
import "../../style/header/index.css";

import NavbarIthem from './navbar/NavbarItem';

class Header extends Component  {

    constructor(props) {
        super(props);
        this.menu = ['o mnie', 'pokaż swój projekt', 'ściągi', 'kontakt'];
    }

    render() {
        const listItems = this.menu.map((title, index) =>
            <NavbarIthem key={index}>{title}</NavbarIthem>
        );

        return (
            <ul className={'navbar-list'}>
                {listItems}
            </ul>
        )

    }
}

export default Header;
