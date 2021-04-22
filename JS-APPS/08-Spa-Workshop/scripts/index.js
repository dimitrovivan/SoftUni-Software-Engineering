import {router} from './router.js';
import {init, getDomElement} from './init.js';

init();

getDomElement["root"].addEventListener('click', checkIfTargetMatchAndNavigate);


function checkIfTargetMatchAndNavigate(e) {

    e.preventDefault();

    if(!lookForMatchInClassList('nav-link', e.target) || !lookForMatchInTagName('a', e.target)) return;

    let newUrl = new URL(e.target.href);
      
    router(newUrl.pathname);
}

const lookForMatchInClassList = (lookingClassName, currentElement) => currentElement.classList.contains(lookingClassName) ? true : false;

const lookForMatchInTagName = (lookingTag, currentElement) => lookingTag.toLowerCase() === (currentElement.tagName).toLowerCase() ? true: false;


