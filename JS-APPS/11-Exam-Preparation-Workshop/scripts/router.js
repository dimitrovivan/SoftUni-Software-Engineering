import { getHtmlResult } from './templateService.js';
import { checkIfIsLogged, removeUserToken } from './userService.js';
import { deleteOnClick, getAllArticles, getArticleById } from './articleService.js';
import { convertObj } from './util.js';

const rootElement = document.querySelector('#root');

const routes = [
    {
        path: /^(\/)$/gm,
        execute: async () => {
            
            let context = {};

            context.isLogged = checkIfIsLogged();

            let data = await getAllArticles();
             
            let convertedArticleData = convertObj(data);

            context.jsArticles= convertedArticleData.js;
            context.javaArticles= convertedArticleData.java;
            context.cSharpArticles= convertedArticleData.cSharp;
            context.pythonArticles= convertedArticleData.python;

            return getHtmlResult('home', context);
        }
    },
    {
        path: /^(\/login)$/gm,
        execute: async () => { 

            let context = {};

            context.isLogged = checkIfIsLogged();

            return getHtmlResult('login', context)
        }
    },
    {
        path: /^(\/register)$/gm,
        execute: async () => {

            let context = {};
           
            context.isLogged = checkIfIsLogged();
                 
            return getHtmlResult('register', context);
        }
    },
    {
        path: /^(\/create)$/gm,
        execute: async () =>  {
            
            let context = {};

            context.isLogged = checkIfIsLogged();

            return getHtmlResult('create', context);
        }
    },
    {
        path: /^(\/logout)$/gm,
        execute: async () => {
            
            let context = {};
            
            removeUserToken();
            context.isLogged = checkIfIsLogged();

            return getHtmlResult('/login', context);
        }
    },
    {
        path: /^(\/details\/).+$/gm,
        execute: async () =>  {

            let context = {};

            let articleId = location.pathname.split('/')[2];

            let articleData = await getArticleById(articleId);

            let isLogged = checkIfIsLogged();

            context = {isLogged, ...articleData, key: articleId};

            return getHtmlResult('details', context);
        }
    },

    {
        path: /^(\/delete\/).+$/gm,
        execute: async () =>  {

            return redirect('/');
        }
    }
]

export async function router(pathName) {

    try {

    let route = checkForValidPath(pathName);

    if (!route) return navigate('/');

    let htmlResult = await route.execute();

    rootElement.innerHTML = htmlResult;
    } catch(e) {
        console.log('In router' + e.error);
    }

}

export function navigate(pathName) {
    
    history.pushState({}, '', pathName);

    let customPopStateEvent = new CustomEvent('popstate');

    window.dispatchEvent(customPopStateEvent);

}

window.addEventListener('popstate', () => {

    router(location.pathname);

})

export function redirect(pathName) {

    navigate(pathName);

}

export function checkForValidPath(pathName) {

    let result = false;
        
    Object.entries(routes).forEach( ([key, value]) => {

       if (pathName.match(value.path)) result = value;

    })

    return result;

}

export const checkIfIsSamePath = (pathName) => {

     if(location.pathname != pathName || history.length < 2) return false;
     return true;

}
    
    