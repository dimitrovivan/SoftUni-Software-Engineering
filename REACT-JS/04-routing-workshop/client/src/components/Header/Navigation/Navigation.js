import { Component } from "react";
import { NavLink } from 'react-router-dom';

import style from './Navigation.module.css';

class Navigation extends Component {
    render() {
        return (
            <nav className={style.navbar}>
                <section className={style.navbarDashboard}>
                    <div className={style.firstBar}>
                        <NavLink to="#">Dashboard</NavLink>
                        <NavLink className={style.button} to="#">My Pets</NavLink>
                        <NavLink className={style.button} to="#">Add Pet</NavLink>
                    </div>
                    <div className={style.secondBar}>
                        <ul>
                            <li>Welcome, {  }!</li>
                            <li><NavLink to="#">Logout</NavLink></li>
                        </ul>
                    </div>
                </section>
                <section className="navbar-anonymous">
                    <ul>
                        <li><NavLink to="#"> Register</NavLink></li>
                        <li><NavLink to="#"> Login</NavLink></li>
                    </ul>
                </section>
            </nav>
        )
    }
}

export default Navigation;