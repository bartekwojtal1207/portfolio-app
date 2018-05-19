import React, { Component } from 'react';
import '../../App.css'


import NavbarIthem from './navbar/NavbarItem';

class Header extends Component  {

    constructor(props) {
        super(props);
        this.titles = ['o mnie', 'pokaż swój projekt', 'ściągi', 'kontakt'];
    }

    render() {
        const listItems = this.titles.map((title, index) =>
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
