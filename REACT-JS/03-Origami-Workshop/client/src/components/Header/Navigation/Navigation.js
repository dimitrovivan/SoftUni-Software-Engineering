import { Component } from "react";
import style from './Navigation.module.css';

class Navigation extends Component {

    render() {
        return (
            <nav className={style.navigation}>
                <ul className={style.navigationList}>
                    <li className={style.listItem}><img src="white-origami-bird.png" alt="Bird" /></li>
                    <li className={style.listItem}><a href="#">Going to 1</a></li>
                    <li className={style.listItem}><a href="#">Going to 2</a></li>
                    <li className={style.listItem}><a href="#">Going to 3</a></li>
                    <li className={style.listItem}><a href="#">Going to 4</a></li>
                    <li className={style.listItem}><a href="#">Going to 5</a></li>
                </ul>
            </nav>
        )
    }

}

export default Navigation;