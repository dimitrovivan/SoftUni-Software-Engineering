import { getPartialTemplateView } from './templateService.js';
import { redirect, checkForValidPath } from './router.js';

export function init() { 

    let path = location.pathname;

    Promise.all([
         getPartialTemplateView('header'), 
         getPartialTemplateView('footer')
               ]).
               then(( [headerHtml, footerHtml]) => {
                Handlebars.registerPartial('header', headerHtml);
                Handlebars.registerPartial('footer', footerHtml); 

                   
                    if(!checkForValidPath(path)) return redirect('/');
                    return redirect(path);
               });
}