import {init} from './scripts/init.js';
import { navigate } from './scripts/router.js';

const rootElement = document.querySelector('#root');

rootElement.addEventListener('click', (e) => {

    e.preventDefault();

    if(!e.target.tagName === 'A' || !e.target.classList.contains('nav-link')) return;

    navigate(e.target.href);

})

init();

