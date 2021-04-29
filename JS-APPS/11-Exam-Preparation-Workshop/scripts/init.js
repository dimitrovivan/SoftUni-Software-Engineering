import { getPartialTemplateView } from './templateService.js';
import { redirect, checkForValidPath } from './router.js';
import { register, login } from './userService.js';

export function init() { 

    let path = location.pathname;
    window.register = register;
    window.login = login;

    Promise.all([
         getPartialTemplateView('header'), 
         getPartialTemplateView('footer')
               ]).
               then(( [headerHtml, footerHtml]) => {
                Handlebars.registerPartial('header', headerHtml);
                Handlebars.registerPartial('footer', footerHtml);
                   
                    if(!checkForValidPath(path)) return redirect('/');
                    return redirect(path);
               })
               .catch(err => console.log(err))
}