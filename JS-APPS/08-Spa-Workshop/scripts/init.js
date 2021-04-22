import getTemplate from './template.js';
import {router, hasCurrentMapLocation, redirect} from './router.js';

const getDomElement = {

    root: (() => document.querySelector('.root'))(),

}

function init () {
    
    const homeGuestPartial = getTemplate('home-guest');
    const homeUserPartial = getTemplate('home-user');
    const navigationPartial = getTemplate('navigation');

    Handlebars.registerPartial("home-guest",homeGuestPartial);
    Handlebars.registerPartial("home-user",homeUserPartial);
    Handlebars.registerPartial("navigation",navigationPartial);


    if(!hasCurrentMapLocation(location.pathname)) return redirect('/home')
    return router(location.pathname);
}

export {getDomElement, init};