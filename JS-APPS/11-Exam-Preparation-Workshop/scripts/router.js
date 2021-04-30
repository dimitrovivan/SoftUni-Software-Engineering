import { getHtmlResult } from './templateService.js';
import { checkIfIsLogged, removeUserToken } from './userService.js';
import { getAllArticles } from './articleService.js';
import { convertObj } from './util.js';

const rootElement = document.querySelector('#root');

const routes = [
    {
        path: '/',
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
        path: '/login',
        execute: async () => { 

            let context = {};

            context.isLogged = checkIfIsLogged();


            return getHtmlResult('login', context)
        }
    },
    {
        path: '/register',
        execute: async () => {

            let context = {};
           
            context.isLogged = checkIfIsLogged();
                 
            return getHtmlResult('register', context);
        }
    },
    {
        path: '/create',
        execute: async () =>  {
            
            let context = {};

            context.isLogged = checkIfIsLogged();

            return getHtmlResult('create', context);
        }
    },
    {
        path: '/logout',
        execute: async () => {
            
            let context = {};
            
            removeUserToken();
            context.isLogged = checkIfIsLogged();

            return getHtmlResult('/login', context);
        }
    },
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

    if(!checkIfIsSamePath(pathName)) history.pushState({}, '', pathName);

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

    return routes.find( ({path}) => path === pathName);

}

const checkIfIsSamePath = (pathName) => location.pathname == pathName ? true : false;
    