import { Component } from "react";

import style from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <footer className={style.footer}>
                <p>@PetMyPet</p>
            </footer>
        )
    }
}

export default Footer;