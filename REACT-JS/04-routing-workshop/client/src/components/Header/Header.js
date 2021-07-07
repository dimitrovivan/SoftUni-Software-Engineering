import { Component } from 'react';

import style from './Header.module.css';
import Navigation from './Navigation';

class Header extends Component {
    render() {
        return (
            <header className={style.siteHeader}>
                <Navigation />
            </header>
        )
    }
}

export default Header;