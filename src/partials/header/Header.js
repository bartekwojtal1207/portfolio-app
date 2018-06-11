import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

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
                {id: 1, title: 'o mnie', visibleSubCategory: 'none'},
                {id: 2, title: 'pokaż swój projekt', visibleSubCategory: 'none'},
                {id: 3, title: 'ściągoo', visibleSubCategory: 'none'},
                {id: 4, title: 'kontakt', visibleSubCategory: 'none'}
            ]
    };

    showSubCattegory(index) {
        // @TODO dziala niezle przerobic na efekt po najechaniu mysza a nie po kliku ! :-)
        // show & hidden subcategory
        const cattegory = this.state.cattegory;
        // @TODO przerobic na kopie obiektu !!!!!!! odc 57 !! @WAZNE
        if (cattegory[index].visibleSubCategory === 'block') {
            cattegory[index].visibleSubCategory = 'none';
        }else {
            cattegory.map((element, index) =>
                element.visibleSubCategory = 'none'
            );
            cattegory[index].visibleSubCategory = 'block';
        }

        this.setState({ cattegory: cattegory })
    }

    render() {
        const listItems = this.state.cattegory.map((cattegory, index) =>
            <NavbarIthem
                key={cattegory.id}
                click={() => this.showSubCattegory(index)}
                visibleSubCategory={cattegory.visibleSubCategory}>{cattegory.title}
            </NavbarIthem>
        );

        return (
            <StyleRoot>
                <div>
                    <ul className={'navbar-list'}>
                        {listItems}
                    </ul>
                </div>
            </StyleRoot>
        )

    }
}

export default Header;
