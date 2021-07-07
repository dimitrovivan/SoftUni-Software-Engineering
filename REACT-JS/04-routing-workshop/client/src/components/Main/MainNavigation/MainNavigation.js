import { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import style from './MainNavigation.module.css';

class MainNavigation extends Component {
    render() {
        return (
            <nav className={style.navbar}>
                        <ul>
                            <li><NavLink to="/categories/all">All</NavLink></li>
                            <li><NavLink to="/categories/cats">Cats</NavLink></li>
                            <li><NavLink to="/categories/dogs">Dogs</NavLink></li>
                            <li><NavLink to="/categories/parrots">Parrots</NavLink></li>
                            <li><NavLink to="/categories/reptiles">Reptiles</NavLink></li>
                            <li><NavLink to="/categories/other">Other</NavLink></li>
                        </ul>
                    </nav>
        )
    }
}

export default MainNavigation