import React, { Component } from 'react';

import '../../App.css';
import "../../style/header/index.css";

import NavbarIthem from './navbar/NavbarItem';

class Header extends Component  {

    constructor(props) {
        super(props);
    }

    state = {

        cattegory:
            [
                {title: 'o mnie', visibleSubCategory: 'none'},
                {title: 'pokaż swój projekt', visibleSubCategory: 'none'},
                {title: 'ściągi', visibleSubCategory: 'none'},
                {title: 'kontakt', visibleSubCategory: 'none'}
            ]
    };

    showSubCattegory(index) {
        // @TODO dziala niezle przerobic na efekt po najechaniu mysza a nie po kliku ! :-)
        const cattegory = this.state.cattegory;

        cattegory.map((element, index) =>
            element.visibleSubCategory = 'none'
        );

        cattegory[index].visibleSubCategory = 'block';

        this.setState({ cattegory: cattegory })
    }

    render() {
        const listItems = this.state.cattegory.map((cattegory, index) =>
            <NavbarIthem key={index} click={() => this.showSubCattegory(index)} visibleSubCategory={cattegory.visibleSubCategory}>{cattegory.title}</NavbarIthem>
        );

        return (
            <ul className={'navbar-list'}>
                {listItems}
            </ul>
        )

    }
}

export default Header;
