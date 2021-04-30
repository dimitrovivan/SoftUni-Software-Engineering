import { getPartialTemplateView } from './templateService.js';
import { redirect, checkForValidPath } from './router.js';
import { register, login } from './userService.js';
import { createArticle } from './articleService.js';

export function init() { 

    let path = location.pathname;

    // Global attach on functions! Bad practice but handlebars doesn't support callback functions in events, because it immediately
    // renders the result when the template is loaded, doesn't go in the callback queue

    // I use handlebars and custom routing for learning purposes ! To understand the behind logic in frameworks better.
    window.register = register;
    window.login = login;
    window.createArticle = createArticle;
    //

    Promise.all([
         getPartialTemplateView('header'), 
         getPartialTemplateView('footer'),
         getPartialTemplateView('article')
               ]).
               then(( [headerHtml, footerHtml, articleHtml]) => {
                Handlebars.registerPartial('header', headerHtml);
                Handlebars.registerPartial('footer', footerHtml);
                Handlebars.registerPartial('article', articleHtml);

                    if(!checkForValidPath(path)) return redirect('/');
                    return redirect(path);

               })
               .catch(err => console.log(err))
}